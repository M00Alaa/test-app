import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import 'moment/locale/ar';
import { BehaviorSubject } from 'rxjs';
import { SpinnerService } from './spinner.service';



@Injectable({ providedIn: 'root' })
export class LanguageService {
  public languages: {
    logo: string,
    name: string,
    code: string
  }[] = [{ 
    code: 'en',
    logo: 'assets/img/flags/united-states.png',
    name: 'English'
  }, {
    code: 'ar',
    logo: 'assets/img/flags/egypt.png',
    name: 'Arabic'
  }];
  currentLang = new BehaviorSubject<string>('');
  constructor(public translate: TranslateService,
     public spinnerService: SpinnerService,
    @Inject(DOCUMENT) private document: Document
     ) {
    let browserLang;
    this.translate.addLangs(this.languages.map(e => e.code));
    if (localStorage.getItem("lang")) {
      browserLang = localStorage.getItem("lang");
    }
    else {
      browserLang = translate.getBrowserLang();
    }
    this.setLanguage("ar");
  }
  
  public setLanguage(lang: string) {
    if (lang?.match(/en|ar/)) {
      // this.spinnerService.showSpinner();
      this.translate.use(lang).subscribe();
      localStorage.setItem('lang', lang);
      if (lang === 'ar') {
        this.document.documentElement.dir = 'rtl';
      } else {
        this.document.documentElement.dir = 'ltr';
      }
      this.currentLang.next(lang);
      this.document.documentElement.lang = lang;
      moment.locale(lang);

    }
  }

}
