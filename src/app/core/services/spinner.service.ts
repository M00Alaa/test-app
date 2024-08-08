import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  show : boolean = false;


  showSpinner(){
    setTimeout(() => {
      this.show = true;
    }, 0)
  }
  hideSpinner(){
    setTimeout(() => {
  
      this.show = false;
    }, 0)
  }
}
