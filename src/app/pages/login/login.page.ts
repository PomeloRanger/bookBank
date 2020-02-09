import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/shared/services/authenticate.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Login } from 'src/app/shared/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  loginError: string;

  constructor(private authService : AuthenticateService) 
  {
      this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() 
  {
  }

  login()
  {
    var login : Login = new Login(this.loginForm.value.username, this.loginForm.value.password);
    this.authService.Login(login).subscribe(result => {
      console.log(result)
    });
  }
}