import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { FormGroup } from '@angular/forms'
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  public token: string;
  headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http, private path:AppService) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  connect(api:string, email:string, password:string, password2?:string, name?:string){
    let paylord
    if(password2 || name){
      paylord = { name : name, email: email, password1:password, password2:password2 }
    } else {
      paylord = { email: email, password: password }
    }
    return this.http.post(api, JSON.stringify(paylord)
      , { headers: this.headers })
      .map((response: Response) => {
        console.log("connect");
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;

          // store email and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  login(email: string, password: string): Observable<boolean> {
    return this.connect("https://siwon.me/user/login/", email, password);
  }

  signup(email: string, password: string, password2: string, name: string): Observable<boolean>{
    return this.connect("https://siwon.me/user/signup/", email, password, password2, name);
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}