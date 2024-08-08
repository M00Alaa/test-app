import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StylesChangerService } from '../core/services/style.service';
import { LayoutsModule } from './layout/layouts.module';
import { ClientsRoutingModule } from './clients-routing.module';

@NgModule({
  imports: [CommonModule, ClientsRoutingModule, LayoutsModule],
})
export class ClientsModule {
  constructor(styleService: StylesChangerService) {
    styleService.loadStyle('pmo');
  }
}
