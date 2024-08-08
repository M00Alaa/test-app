import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})

/**
 * PAges-404 component
 */
export class Page404Component  {

  constructor(
    private auth: AuthenticationService
  ){

  }


  redirectUser(){
    this.auth.redirectUser()
  }

}
