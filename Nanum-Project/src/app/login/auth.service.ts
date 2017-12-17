import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import 'rxjs/add/operator/map';

declare var FB: any;

interface LoginData {
  email: string;
  password: string;
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
export class AuthService {
  public token: string;
  headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http, private path: AppService) {
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

  connect(api: string, category: string, data) {
    const paylord = data;

    return this.http.post(api, JSON.stringify(paylord)
      , { headers: this.headers })
      .map((response: Response) => {
        console.log('connect');
        // login successful if there's a jwt token in the response
        const token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;

          // store email and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(response));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
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

  // loadScript(url) {
  //   console.log('preparing to load...')
  //   let node = document.createElement('script');
  //   node.src = url;
  //   node.type = 'text/javascript';
  //   document.getElementsByTagName('head')[0].appendChild(node);
  // }

  // facebooklogin(accessToken: string, userid: string, connectFunc) {
  facebooklogin() {
    const api_path = this.path.api_path;
    const connect = this.connect;
    const funcLogin = FB.login;

    funcLogin(function (response) {
      console.log(this);
      if (response.status === 'connected') {
        console.log(response);
        const fbtoken = response.authResponse.accessToken;
        const fbuserid = response.authResponse.userID;
        const data = { access_token: fbtoken, facebook_user_id: fbuserid };
        return connect(api_path + 'user/facebook-login/', 'facebook', data);
      }
    });
    // FB.login();
    // return connectFunc('https://siwon.me/user/facebook/', 'facebook', data);
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
