
import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-logout',
  template: ` <div *ngIf="this.authService.isLoggedIn.status" class="container" style="text-align: center; padding-top: 50px; padding-bottom: 20px" >
                <button type="button"
                       class="waves-effect waves-light btn btn-flat btn btn-outline-warning"
                       (click) ="onLogout()"
                       >Logout
               </button>
               <div>`
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogout(){
    this.authService.logout();
  }
}
