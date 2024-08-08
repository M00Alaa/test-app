import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, switchMap, take, tap } from 'rxjs';
import { SettingsUnit } from '../backend/pm/models';
import { SettingsUnitsService } from '../backend/pm/services';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  currentUnits: BehaviorSubject<SettingsUnit[] | null> = new BehaviorSubject<SettingsUnit[] | null>(null);
  private refreshSubject: Subject<boolean> = new Subject<boolean>();
  private isRefreshing: boolean = false;
  constructor(private setting: SettingsUnitsService) {
    this.refreshSubject.pipe(
      switchMap((force) => {
        if (this.currentUnits.value && !force) {
          return this.currentUnits;
        } else {
          return this.setting.apiSettingsUnitsGetSettingsUnitsPost({
            body: {
              pageNumber: 1,
              pageSize: 3000,
            },
          }).pipe(
            tap((res) => {
              if (res) {
                if (!this.currentUnits.value || force) {
                  this.currentUnits.next(res.units?.items || null);
                }
              }
            }),
          );
        }
      })
    ).subscribe();
  }

  get(force = false): Observable<SettingsUnit[] | null> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshSubject.next(force);

      // Wait for the response and set isRefreshing to false
      this.currentUnits.pipe(take(1)).subscribe(() => {
        this.isRefreshing = false;
      });
    }

    return this.currentUnits.asObservable();
  }
}
