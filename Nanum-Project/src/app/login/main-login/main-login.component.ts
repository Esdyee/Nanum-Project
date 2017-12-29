import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AppService } from '../../app.service';

declare var FB: any;

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {
  obj: {};
  test: string;
  loginOK: Observable<object>;

  constructor(private route: ActivatedRoute, private navRoute: Router, private auth: AuthService, private path: AppService
  , private zone: NgZone) {
    // facebook login 상태
    this.auth.login$.takeWhile(() => this.auth.sign)
      .finally(() => this.navigateMain())
      .subscribe( name => {
      console.log(name);
      this.loginOK = name;
      this.navigateMain();
    } );
  }

  ngOnInit() {
    //   this.navRoute.navigate(['/answer']);
    // if(localStorage.getItem('currentUser')){
    // }
  }

  findPassword() {
    this.navRoute.navigate(['find']);
  }

  FBLogin() {
    FB.getLoginStatus(res => {
      if (res.status !== 'connected') {
        FB.login(response => {
            const fbtoken = response.authResponse.accessToken;
            const fbuserid = response.authResponse.userID;
            const data = { access_token: fbtoken, facebook_user_id: fbuserid };
            return this.auth.connect(this.path.api_path + 'user/facebook-login/', 'facebook', data);
        });
      } else {
        const data = { access_token: res.authResponse.accessToken, facebook_user_id: res.authResponse.userID };
        console.log(data);
        this.auth.facebookLoginAuth(data)
          .subscribe(result => {
            console.log(result);
            this.zone.run(() => this.navRoute.navigate(['/answer']));
          });
      }
    });
  }

  navigateMain() {
    this.navRoute.navigate(['/answer']);
  }
}
