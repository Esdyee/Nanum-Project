import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute, private navRoute: Router, private auth: AuthService, private path: AppService) {
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
    //   this.navRoute.navigate(['/main']);
    // if(localStorage.getItem('currentUser')){
    // }
  }

  findPassword() {
    this.navRoute.navigate(['find']);
  }

  FBLogin() {
    this.auth.facebookCheck();
    // this.navRoute.navigate(['/main']);
  }

  navigateMain() {
    this.navRoute.navigate(['/main']);
  }
}
