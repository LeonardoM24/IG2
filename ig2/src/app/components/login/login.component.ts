import {Component} from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Milogin{
  constructor(private router:Router, private SignUpAuth: AuthService){}

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  signUp = new FormGroup({
    userregistro: new FormControl(),
    correoregistro: new FormControl(),
    passregistro: new FormControl()
  });

  signUpSubmit(){
    console.log(this.signUp.value)

    this.SignUpAuth.regUser([this.signUp.value.userregistro, this.signUp.value.correoregistro, this.signUp.value.passregistro]).subscribe();

  }

}