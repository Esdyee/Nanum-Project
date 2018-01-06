import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { AppService } from '../app.service';
import { MainLoginComponent } from './main-login/main-login.component';
import 'rxjs/add/operator/map';

declare var FB: any;

interface LoginData {
  email: string;
  password: string;
}

interface LoginAccessData {
  token: string;
  user: object;
}

interface SignupData {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

interface FacebookData {
  access_token: string;
  facebook_user_id: string;
}



@Injectable()
export class AuthService implements OnInit {
  public token: string;
  // facebook login
  public loginsign = new Subject<any>();
  public login$ = this.loginsign.asObservable();
  public sign = false;
  private fbToken = [];
  private tokensub: Subscription;

  headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient, private path: AppService, private router: Router ) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;

    (<any>window).fbAsyncInit = function () {
      FB.init({
        appId: '1899454773703414',
        cookie: true, // enable cookies to allow the server to access
        // the session
        xfbml: true, // parse social plugins on this page
        version: 'v2.8' // use graph api version 2.8
      });
    };

    // facebook
    // Load the SDK asynchronously
    (function (d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    // this.loadScript(initFunc);
  }

  ngOnInit() {

  }

  connect(api: string, category: string, data) {
    const paylord = data;
    // console.log(api, data);

    return this.http.post(api, JSON.stringify(paylord), { headers: {'Content-Type': 'application/json'}})
      .map((response: LoginAccessData) => {
        console.log('connect');
        // console.log(response);
        // login successful if there's a jwt token in the response
        const token = response && response.token;
        if (token) {
          // set token property
          this.token = token;
          // this.path.test_user_data = response;

          // store email and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(response));
          return true;
        } else {
          // return false to indicate failed login
          console.log('connect fail');
          return false;
        }
      });
  }

  login(email: string, password: string): Observable<boolean> {
    const data: LoginData = { email: email, password: password };
    return this.connect(this.path.api_path + 'user/login/', 'login',  data);
  }

  signup(email: string, password: string, password2: string, name: string): Observable<boolean> {
    const data: SignupData = { email : email, password1 : password, password2 : password2, name : name };
    return this.connect(this.path.api_path + 'user/signup/', 'signup', data);
  }

  // facebooklogin(accessToken: string, userid: string, connectFunc) {
  facebookCheck() {
    // FB.login(response => {
    //   if (response.status === 'connected') {
    //     const fbtoken = response.authResponse.accessToken;
    //     const fbuserid = response.authResponse.userID;
    //     const data = { access_token: fbtoken, facebook_user_id: fbuserid };
    //     return this.connect(this.path.api_path + 'user/facebook-login/', 'facebook', data);
    //     // this.sign = true;
    //     // this.setParams(data);
    //   } else {
    //     this.connect(this.path.api_path + 'user/facebook-login/', 'facebook', data);
    //   }
    // });
  }

  facebookLoginAuth(data): Observable<boolean> {
    return this.connect(this.path.api_path + 'user/facebook-login/', 'facebook', data);
  }

  setParams(data) {
    this.loginsign.next(data);
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login/main']);
  }
}
