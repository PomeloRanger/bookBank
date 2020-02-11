import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Login } from 'src/app/shared/models/login';
import { JsonPipe } from '@angular/common';
import { AuthUser } from 'src/app/shared/models/authUser';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  loginError: string;

  constructor(private authService : AuthService, private toastController: ToastController, private router: Router) 
  {
      this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() 
  {
  }

  User : AuthUser;

  login()
  {
    var login : Login = new Login(this.loginForm.value.username, this.loginForm.value.password);
    
    this.authService.login(login).subscribe(async(result) => {
      const toast = await this.toastController.create({
        message: 'Successfully logged in as ' + result.username,
        duration: 2000,
        position: 'top',
        color: 'secondary'
      });
      toast.present();
      this.router.navigate(['/tabs/home']);
    });
  }
}