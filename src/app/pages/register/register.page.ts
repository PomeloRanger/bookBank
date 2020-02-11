import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Register } from 'src/app/shared/models/register';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService : AuthService, private toastController: ToastController, private router: Router) 
  {

  }

  signupForm: FormGroup;
  signupError: string;
  
  ngOnInit() 
  {
      this.signupForm = new FormGroup({
        firstname: new FormControl(""),
        lastname: new FormControl(""),
        postalcode: new FormControl(""),
        address : new FormControl(""),
        username: new FormControl(""),
        password: new FormControl("")
    });
  }

  signup()
  {
    var registerModel : Register = new Register(this.signupForm.value.firstname, this.signupForm.value.lastname, this.signupForm.value.username,this.signupForm.value.password, this.signupForm.value.postalcode, this.signupForm.value.address)
    this.authService.register(registerModel).subscribe(async() => {
      const toast = await this.toastController.create({
        message: 'Sign up successfully. Please log in again.',
        duration: 2000,
        position: 'top',
        color: 'secondary'
      });
      toast.present();
      this.router.navigate(['/login']);
    })
  }
}