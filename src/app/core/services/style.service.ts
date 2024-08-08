import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class StylesChangerService {

  activatedTheme = new BehaviorSubject<'sync' | 'pmo' | 'tm' | 'plant'>('pmo');
  constructor(
    private http: HttpClient,
    public spinnerService: SpinnerService,
    @Inject(DOCUMENT) private document: Document,
  ) {

    this.activatedTheme.subscribe(theme => {
      this.removeOtherStyles(theme);
    })

  }

  loadStyle(styleName: string) {
    this.spinnerService.showSpinner();
    // Load style asynchronously
    const existingStyle = this.document.head.querySelector('.custom-mgmg-theme');
    if (existingStyle) {
      existingStyle.remove();
    }
    this.load(styleName).subscribe({
      next: (res) => {
        this.spinnerService.hideSpinner();
        if (!res) {
          console.error('Error', 'Can\'t get style');
        }
      },
      error: () => {
        this.spinnerService.hideSpinner();
        console.error('Error', 'Can\'t get style');
      }
    });
  }

  removeOtherStyles(except?: string) {
    const existingStyles = this.document.head.querySelectorAll('.custom-mgmg-theme:not(.' + except + ')');
    existingStyles.forEach((style) => {
      style?.remove();
    });
  }


  private load(styleName): Observable<boolean> {

    const style = this.document.createElement('link');
    style.id = 'custom-mgmg-theme';
    style.rel = 'stylesheet';
    style.className = 'custom-mgmg-theme ' + styleName;
    style.type = 'text/css';
    return this.http.get(`${styleName}.css`, { responseType: 'text' }).pipe(
      map((data) => {
        style.href = `${styleName}.css`;
        this.document.head.appendChild(style);
        this.spinnerService.hideSpinner();
        this.activatedTheme.next(styleName);


        return true;
      })
    );
  }
}
