import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ZorroModule } from 'src/app/shared/modules/zorro.module';
import { Subscription } from 'rxjs';
import { Qualification } from 'src/app/core/backend/elites/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QualificationsService } from 'src/app/core/backend/elites/services';
import { SWAL } from 'src/app/app-const';

@Component({
  selector: 'qualification-form'!,
  standalone: true,
  imports: [CommonModule, ZorroModule, ReactiveFormsModule],
  templateUrl: './qualification-form.component.html',
  styleUrls: ['./qualification-form.component.scss']
})
export class QualificationFormComponent implements OnDestroy {
  #destroy = new Subscription();
  itemDetails: Qualification | undefined;

  readonly #activeModal = inject(NgbActiveModal);
  readonly #qualificationService = inject(QualificationsService);
 readonly #fb = inject(FormBuilder);

 public set setItem(projectTasks: Qualification | undefined) {
  this.itemDetails = projectTasks;
  this.form.patchValue({
    name: projectTasks?.name,
  });
}

form = this.#fb.group({
  name: new FormControl<string | null>(null, Validators.required),
});

updateQualification() {
  const Name = this.form.value.name;
  if (Name) {
    const id = this.itemDetails?.id;
    if (id !== undefined) {
      this.#destroy.add(
        this.#qualificationService
          .apiQualificationsUpdateQualificationPost({
            body: {
              id,
              name: Name,
            },
          })
          .subscribe({
            next: () => {
              SWAL('success', 'تمت تعديل  المؤهل بنجاح', '');
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

addQualification() {
  const Name = this.form.value.name;
  if (Name) {
    this.#destroy.add(
      this.#qualificationService
        .apiQualificationsCreateQualificationPost({
          body: {
            name: Name,
          },
        })
        .subscribe({
          next: () => {
            SWAL('success', 'تمت إضافة  المؤهل بنجاح', '');
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
      this.updateQualification();
    }else{
      this.addQualification();
    }

  }
}

ngOnDestroy(): void {
  this.#destroy.unsubscribe();
  }
}
