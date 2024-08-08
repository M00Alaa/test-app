import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LangChangerComponent } from './lang-changer/lang-changer.component';

import { NgbCollapseModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
import { SimplebarAngularModule } from 'simplebar-angular';

import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../core/services/language.service';
import { RoleDirective } from '../shared/directives/app-permissions.directive';
import { FooterComponent } from './footer/footer.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { HorizontaltopbarComponent } from './horizontaltopbar/horizontaltopbar.component';
import { LayoutComponent } from './layout.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskManagerLayoutComponent } from './task-manager-layout/task-manager-layout.component';
import { AccountDropdownComponent } from './topbar/account-dropdown/account-dropdown.component';
import SystemSwitcherComponent from './topbar/system-switcher/system-switcher.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LeftSidebarComponent } from './vertical/left-sidebar/left-sidebar.component';
import { VerticalComponent } from './vertical/vertical.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [LayoutComponent,
     SidebarComponent,
     TopbarComponent,
     FooterComponent,
     NotificationsComponent,
     RightsidebarComponent,
     HorizontalComponent,
     VerticalComponent,
     HorizontaltopbarComponent,
     LeftSidebarComponent,
     TaskManagerLayoutComponent,
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
    AccountDropdownComponent,
    SimplebarAngularModule
  ],
  providers: [LanguageService]
})
export class LayoutsModule { }
