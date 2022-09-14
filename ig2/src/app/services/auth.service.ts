import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class AuthService{ 
    constructor(private http: HttpClient){}

    baseServerUrl = 'http://127.0.0.1:5000/' // API

    regUser(user:Array<string>){

        console.log('llamada a la api: ', user)
        
        return this.http.post<any>(
            this.baseServerUrl + 'create/user',
            {
              username: user[0],
              email: user[1],
              password: user[2]  
            }
        );
    }

    logInUser(user: Array<string>){

        return this.http.post<any>(
            this.baseServerUrl + 'login/user',
            {
                username: user[0],
                password: user[1]
            }
        );
    }


}
