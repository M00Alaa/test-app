/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ZorroModule } from 'src/app/shared/modules/zorro.module';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ScrollXComponent } from 'src/app/shared/components/scroll-x/scroll-x.component';
import { Subscription } from 'rxjs';
import { CityService } from 'src/app/core/backend/elites/services';
import { SWAL } from 'src/app/app-const';
import { City } from 'src/app/core/backend/elites/models';
import { NgbModal, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { CityFormComponent } from './city-form/city-form.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'elites-cities',
  standalone: true,
  imports: [
    CommonModule,
    ZorroModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollXComponent,
     NgbPagination
  ],
  templateUrl: './elites-cities.component.html',
  styleUrls: ['./elites-cities.component.scss'],
})
export class ElitesCitiesComponent implements OnInit, OnDestroy {
  #destroy = new Subscription();
  searchTerm: string = '';
  cities: City[] = [];
  _page = 1;
  _total = 0;
  _pageSize = 5;

  private readonly fb = inject(FormBuilder);
  readonly #location = inject(Location);
  readonly #modalService = inject(NgbModal);
  private readonly citiesService = inject(CityService);

  form = this.fb.group({
    name: new FormControl<string | null>(null, Validators.required),
  });

  ngOnInit(): void {
    this.getCity(1);
  }

  onSubmit() {
    if (this.form.valid) {
      this.addCity();
    }
  }

  addCity() {
    const cityName = this.form.value.name;
    if (cityName) {
      this.#destroy.add(
        this.citiesService
          .apiCityCreateCityPost({
            body: {
              name: cityName,
            },
          })
          .subscribe({
            next: () => {
              SWAL('success', 'تمت إضافة  المدينة بنجاح', '');
              this.form.reset();
              this.getCity(1);
            },
            error: (error) => {
              SWAL('error', error?.errorCode, error?.message || '');
            },
          }),
      );
    }
  }

  openCityModal(task?: City) {
    const modalRef = this.#modalService.open(CityFormComponent, {
      modalDialogClass: 'col-12 col-md-10 max-w-1100px',
      windowClass: 'bg-gray bg-opacity-50',
    });
    modalRef.componentInstance.setItem = task;
    modalRef.closed.subscribe((res) => {
      if (res) {
        this.getCity(1);
      }
    });
  }
  deleteCity(id: string | undefined) {
    Swal.fire({
      title: 'هل أنت متأكد من الحذف؟',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'حــذف',
      cancelButtonText: 'إلغــاء',
    }).then((result) => {
      if (result.isConfirmed) {
    if (id) {
      this.#destroy.add(
        this.citiesService
          .apiCityDeleteCityDelete({
            body: {
              id: id,
            },
          })
          .subscribe({
            next: () => {
              SWAL('success', 'تمت حذف المدينة بنجاح', '');
              this.getCity(1);
            },
            error: () => {
              SWAL('error', 'هذة المدينة مستخدمة', '');
            },
          }),
      );
    } else {
      SWAL('error', 'Invalid ID', 'The provided ID is undefined.');
    }
  }
});
  }

  getCity(page:number) {
    this._page = page;
    this.#destroy.add(
      this.citiesService
        .apiCityGetCitiesPost({
          body: {
            searchTerm: this.searchTerm,
            sorts: [],
            filters: [],
            pageSize: 99999,
            pageNumber: 1,
          },
        })
        .subscribe({
          next: (response) => {
            this.cities = response.cities?.items as City[];
            this._total = response.cities?.totalCount ?? 0;
          },
          error: (error) => {
            SWAL('error', error?.errorCode, error?.message || '');
          },
        }),
    );
  }

  goBack() {
    this.#location.back();
  }

  ngOnDestroy() {
    this.#destroy.unsubscribe();
  }
}
