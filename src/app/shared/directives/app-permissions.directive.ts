/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Directive({
  selector: '[appRole]',
  standalone: true,
})
export class RoleDirective implements OnInit, OnDestroy {
  @Input() appRole: string[] = [];
  private destroy$ = new Subject();

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef,
    private authService: AuthenticationService,
  ) {}

  ngOnInit() {
    this.authService.currentUserSubject
      .pipe(distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe({
        next: (user) => {
          this.view.clear();
          if (user?.roles) {
            let allowed =
              this.appRole.some((r) => user?.roles?.includes(r)) ||
              !this.appRole ||
              this.appRole.length === 0;
            allowed = true;

            if (allowed || !this.appRole || this.appRole.length === 0) {
              this.view.createEmbeddedView(this.template);
            } else {
              this.view.clear();
            }
          }
        },
      });
  }

  ngOnDestroy() {
    // this.destroy$.next();
    this.destroy$.complete();
  }
}
