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
    this.SignUpAuth.regUser([this.signUp.value.userregistro, this.signUp.value.correoregistro, this.signUp.value.passregistro]).subscribe(
      (response) =>{
        
        if("ERROR" in response){
          console.log(response)

          type ObjectKey = keyof typeof response;
          const myKey = 'ERROR' as ObjectKey;
          window.alert(response[myKey]);

        }
        else{
          console.log('No hay error')
        }
  
      },
      (error) => {
        console.log('ERROR in request (frontend)', error)
      },
      () => {
        console.log('request completed')
      }
    );
    
  }

  logIn = new FormGroup({
    correologin: new FormControl(),
    passlogin: new FormControl()
  });

  

  logInUser(){
    this.SignUpAuth.logInUser([this.logIn.value.correologin, this.logIn.value.passlogin]).subscribe(
      (response) => {
        if('ERROR' in response){
          console.log(response)

          type ObjectKey = keyof typeof response;
          const myKey = 'ERROR' as ObjectKey;
          window.alert(response[myKey]);
        }else{
          console.log(response)

          type ObjectKey = keyof typeof response;

          const id = '_id' as ObjectKey;
          const name = 'username' as ObjectKey;
          const email = 'email' as ObjectKey;
          localStorage.setItem('username', response[name]);
          localStorage.setItem('id', response[id]);
          localStorage.setItem('email', response[email]);
          this.goToPage('Homepage');
        }
      },
      (error) => {
        console.log('ERROR' + error)
      },
      () =>{
        console.log('request completed')
      } 

    )
  }

}