import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileNameUrl',
  standalone: true
})
export class FileNameUrlPipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    let parts = value.split('/') || '';
    
    let filename = parts[parts.length - 1];

    if(filename){
      filename = filename.split('_').slice(1).join('');
    }
    
    return filename?  filename : ''
  }

}
