import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponseData } './../models/AuthResponseData.model';
import { User } from './../models/user.model';


@Injectable({
  	providedIn: 'root'
})

export class LoginService {

	constructor(private http: HttpClient) {
    }

    login(loginData:any){
    	let options = {
          headers: new HttpHeaders({'Accept':'application/json'})
        }; 

        return this.http.post('http://demobackend.localhost.com/api/auth/customer',loginData,options);
    }

    formatUser(data: AuthResponseData) {
        const user = new User(
            data.email
        );
        return user;
    }
}