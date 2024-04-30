import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
}