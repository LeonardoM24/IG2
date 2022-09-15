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
        
        return this.http.post(
            this.baseServerUrl + 'create/user',
            {
              username: user[0],
              email: user[1],
              password: user[2]  
            },
            {
                responseType: 'json'
            }
        );
    }

    logInUser(user: Array<string>){

        return this.http.post<any>(
            this.baseServerUrl + 'login/user',
            {
                username: user[0],
                password: user[1]
            },
            {
                responseType: 'json'
            }
        );
        
    }

    getAllImg(){
        return this.http.get(
            this.baseServerUrl + 'get/img',
            {responseType: 'text'}
        )
    }

    updatePost(change: Array<string>){
        console.log(change)
        return this.http.post(
            this.baseServerUrl + 'mod/img',
            {
                text: change[0],
                link: change[1],
                _id: change[2]
            },
            {
                responseType: 'text'
            }
        )
    }

    deletePost(id: number){

        return this.http.post(
            this.baseServerUrl + 'del/img',
            {
                _id: id
            },
            {
                responseType: 'text'
            }
        )
    }

    upPost(data: Array<string>){
        return this.http.post(
            this.baseServerUrl + 'subir/img',
            {
                username: data[0],
                link: data[1],
                text: data[2]
            },
            {
                responseType: "text"
            }
        )
    }

}
