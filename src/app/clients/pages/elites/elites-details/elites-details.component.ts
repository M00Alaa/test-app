/* eslint-disable @typescript-eslint/no-explicit-any */
import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ROLES, SWAL } from 'src/app/app-const';
import { EliteVm } from 'src/app/core/backend/elites/models';
import { ElitesService } from 'src/app/core/backend/elites/services';
import {
  AuthenticationService,
  MgApplicationUser,
} from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'elites-details',
  templateUrl: './elites-details.component.html',
  styleUrls: ['./elites-details.component.scss'],
})
export class ElitesDetailsComponent implements OnInit, OnDestroy {
  #destroy = new Subscription();
  domain = environment.api + '/';
  acc: MgApplicationUser | null = null;
  fileName: string;
  roles = ROLES;
  gettingData = false;
  itemDetails: EliteVm | undefined;

  readonly #router = inject(Router);
  readonly #location = inject(Location);
  readonly #route = inject(ActivatedRoute);
  readonly #elitesService = inject(ElitesService);
  readonly #authService = inject(AuthenticationService);

  ngOnDestroy(): void {
    this.#destroy.unsubscribe();
  }
  ngOnInit(): void {
    this.getRouting();
    this.getIdentity();
  }

  getIdentity() {
    this.#authService.identity().subscribe((acc) => {
      this.acc = acc;
    });
  }

  getRouting() {
    this.#route.params.subscribe((res) => {
      if (res['id']) {
        this.getDataForEdit(res['id']);
      }
    });
  }

  getDataForEdit(id: string) {
    if (id) {
      this.gettingData = true;

      this.#elitesService
        .apiElitesGetElitesPost({
          body: { id },
        })
        .subscribe({
          next: (res) => {
            const eliteItems = res.elites?.items ?? []; // Provide a default empty array if items are null or undefined
            if (eliteItems.length > 0) {
              this.itemDetails = eliteItems[0] as EliteVm;
            }
            this.gettingData = false;
          },
          error: (err) => {
            SWAL('error', err?.errorCode);
            this.gettingData = false;
            this.#router.navigate(['/system-elites/home']);
          },
        });
    }
  }

  extractFileName(attachment): string {
    const parts = attachment.split('_');
    return parts[parts.length - 1];
  }
  downloadAttachment(url: string) {
    const link = document.createElement('a');
    link.href = this.domain + url;
    link.download = url.split('/').pop() ?? '';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  goBack() {
    this.#location.back();
  }
  showDeleteConfirmation() {
    Swal.fire({
      title: 'هل أنت متأكد من الحذف؟',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'حــذف',
      cancelButtonText: 'إلغــاء',
    }).then((result) => {
      if (result.isConfirmed) {
        this.#destroy.add(
          this.#elitesService
            .apiElitesDeleteEliteDelete({
              body: {
                id: this.itemDetails?.id || '',
              },
            })
            .subscribe({
              next: () => {
                Swal.fire('تم الحذف', '', 'success');
                this.#router.navigate(['/system-elites/home']);
              },
              error: (res) => {
                Swal.fire('خطأ', res?.errorCode, 'error');
              },
            }),
        );
      }
    });
  }
}
