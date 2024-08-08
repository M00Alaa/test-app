import { NgModule } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDatePickerModule } from 'src/app/shared/components/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormFullModule } from './nz-form-full/nz-form-full.module';
import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';

const ngZorroConfig: NzConfig = {
  message: { nzTop: 120 },
  notification: { nzTop: 240 },
  form: {
    nzNoColon: true,
  },
};

@NgModule({
  exports: [
    NzSwitchModule,
    NzRadioModule,
    NzCheckboxModule,
    NzTableModule,
    NzButtonModule,
    NzDropDownModule,
    NzDatePickerModule,
    NzToolTipModule,
    NzFormFullModule,
    NzInputNumberModule,
    NzDividerModule,
    NzSelectModule,
  ],
  providers: [provideNzConfig(ngZorroConfig)],
})
export class ZorroModule {}
