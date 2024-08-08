import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbCollapseModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
import { SimplebarAngularModule } from 'simplebar-angular';

import { TranslateModule } from '@ngx-translate/core';

import { LanguageService } from 'src/app/core/services/language.service';
import { LangChangerComponent } from 'src/app/layouts/lang-changer/lang-changer.component';
import { AccountDropdownComponent } from 'src/app/layouts/topbar/account-dropdown/account-dropdown.component';
import SystemSwitcherComponent from 'src/app/layouts/topbar/system-switcher/system-switcher.component';
import { RoleDirective } from 'src/app/shared/directives/app-permissions.directive';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { VerticalComponent } from './vertical/vertical.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    SidebarComponent,
    TopbarComponent,
    VerticalComponent,
  ],

  imports: [
    CommonModule,
    TranslateModule,
    LangChangerComponent,
    RouterModule,
    NgbDropdownModule,
    RoleDirective,
    ClickOutsideModule,
    NgbCollapseModule,
    NgbTooltipModule,
    SystemSwitcherComponent,
    SimplebarAngularModule,
    AccountDropdownComponent
  ],
  providers: [LanguageService]
})
export class LayoutsModule { }
