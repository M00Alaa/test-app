import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acctype'
})
export class AcctypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
