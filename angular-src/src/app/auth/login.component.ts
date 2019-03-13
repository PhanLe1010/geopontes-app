import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from './auth.service';
import { User } from "../models/user.model";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loadingIcon: boolean = false;
  isSubmit: boolean = false;


  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit(){
    this.loadingIcon = true;
    const user = new User(this.loginForm.value.email, this.loginForm.value.password);
    this.authService.login(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    this.authService.isLoggedIn.status = true;
                    this.loadingIcon = false;
                    this.isSubmit = false;
                },
                error => {
                  console.error(error);
                  this.authService.isLoggedIn.status = false;
                  this.isSubmit = true;
                  this.loadingIcon = false;
                }
            );
  }


}
