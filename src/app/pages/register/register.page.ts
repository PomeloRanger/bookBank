import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticateService } from 'src/app/shared/services/authenticate.service';
import { Register } from 'src/app/shared/models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService : AuthenticateService) 
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
    this.authService.Register(registerModel).subscribe(result => {
      
    })
  }
}