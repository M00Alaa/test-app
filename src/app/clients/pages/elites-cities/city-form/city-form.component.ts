
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZorroModule } from 'src/app/shared/modules/zorro.module';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { City } from 'src/app/core/backend/elites/models';
import { OnDestroy } from '@angular/core';
import { CityService } from 'src/app/core/backend/elites/services';
import { SWAL } from 'src/app/app-const';
@Component({
  selector: 'city-form'!,
  standalone: true,
  imports: [CommonModule, ZorroModule, ReactiveFormsModule],
templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnDestroy {
  #destroy = new Subscription();
  itemDetails: City | undefined;

  readonly #activeModal = inject(NgbActiveModal);
   readonly #citiesService = inject(CityService);
  readonly #fb = inject(FormBuilder);

  public set setItem(projectTasks: City | undefined) {
    this.itemDetails = projectTasks;
    this.form.patchValue({
      name: projectTasks?.name,
    });
  }

  form = this.#fb.group({
    name: new FormControl<string | null>(null, Validators.required),
  });

  updateCity() {
    const categoryName = this.form.value.name;
    if (categoryName) {
      const id = this.itemDetails?.id;
      if (id !== undefined) {
        this.#destroy.add(
          this.#citiesService
            .apiCityUpdateCityPost({
              body: {
                id,
                name: categoryName,
              },
            })
            .subscribe({
              next: () => {
                SWAL('success', 'تمت تعديل  المدينة بنجاح', '');
                this.form.reset();
                this.#activeModal.close(true);
              },
              error: (error) => {
                SWAL('error', error?.errorCode, error?.message || '');
              },
            }),
        );
      }
    }
  }
  addCity() {
    const categoryName = this.form.value.name;
    if (categoryName) {
      this.#destroy.add(
        this.#citiesService
          .apiCityCreateCityPost({
            body: {
              name: categoryName,
            },
          })
          .subscribe({
            next: () => {
              SWAL('success', 'تمت إضافة  المدينة بنجاح', '');
              this.form.reset();
              this.#activeModal.close(true);
            },
            error: (error) => {
              SWAL('error', error?.errorCode, error?.message || '');
            },
          }),
      );
    }
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.itemDetails?.id) {
        this.updateCity();
      }else{
        this.addCity();
      }

    }
  }
  ngOnDestroy(): void {
    this.#destroy.unsubscribe();
  }
}
