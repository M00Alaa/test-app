import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { filter, map } from 'rxjs';
import { projectName } from './app-const';
import { LanguageService } from './core/services/language.service';

import { L10n, enableRtl, setCulture } from '@syncfusion/ej2-base';
import { culure_syncfusion_ar } from 'src/assets/i18n/other/ar';

setCulture('ar');
enableRtl(true);
L10n.load({
    'ar': culure_syncfusion_ar
});
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = {
    en: projectName.en,
    ar: projectName.ar
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private langService: LanguageService,
     ngSelectConfigs: NgSelectConfig,
  ) {
    ngSelectConfigs.clearAllText = 'حذف الكل';
    ngSelectConfigs.loadingText = 'جارٍ التحميل';
    ngSelectConfigs.notFoundText = 'لا يوجد بيانات';
    ngSelectConfigs.placeholder = 'اختر';
    ngSelectConfigs.typeToSearchText = 'ابحث';
   
  }

  ngOnInit() { 
    this.setTitle();
  }

  setTitle(): void {
    const appTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child?.firstChild) {
            child = child.firstChild;
          }
          if (child?.snapshot.data.title) {
            return child.snapshot.data.title;
          }
          return null;
        })
      ).subscribe((ttl: any) => {

        this.title.en = ttl && ttl.en ? ' - ' + ttl.en : projectName.en;
        this.setItNow();
      });
  }

  setItNow(): void {
    this.titleService.setTitle(this.title.en);
  }
}
