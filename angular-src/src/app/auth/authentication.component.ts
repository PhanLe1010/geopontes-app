import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-authentication',
  template: ''
})
export class AuthenticationComponent implements OnInit {
  loginForm: FormGroup;
  loadingIcon: boolean = false;
  successLogin: boolean = false;
  isSubmit: boolean = false;


  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit(){
    console.log(this.loginForm);
    this.successLogin = false;
    this.isSubmit = true;
    this.loadingIcon = false;
  }
  onLogin(){
    this.loadingIcon = true;
  }

  onLogout(){

  }
}
