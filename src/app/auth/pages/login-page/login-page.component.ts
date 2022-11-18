import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {this.loginForm = this.formBuilder.group({
      email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
      password: new FormControl('',Validators.required),
    })
  }

  sendForm():void{
    console.log(this.loginForm?.value)
  }
  
}
