import { NgModule } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';



@NgModule({
  exports: [
    NzFormModule,
    NzInputNumberModule,
    NzInputModule
  ]
})
export class NzFormFullModule { }
