import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service'
import { AppService } from '../../app.service';
declare var FB:any;

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {
  facebookLoginOK;
  obj:object = {}
  test:string;

  constructor(private route: ActivatedRoute, private navRoute: Router, private auth: AuthService, private path: AppService) {   }

  ngOnInit() {
    // if(localStorage.getItem('currentUser')){
    //   this.navRoute.navigate(['/main']);
    // }
  }

  findPassword(){
    this.navRoute.navigate(['find']);
  }
  
  connect(){
    const obj = localStorage.getItem("fblogin");
    console.log(obj);
  }

  FBLogin(){
    //let userid

    let funcPost = function (fbtoken, userid){
      return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('POST', 'https://siwon.me/user/facebook-login/');
        req.setRequestHeader('Content-type', 'application/json');
        req.send(JSON.stringify({ access_token: fbtoken, facebook_user_id: userid }));
        req.onreadystatechange = function () {
          if (req.readyState === XMLHttpRequest.DONE) {
            if (req.status == 200) {
              resolve(req.response);
            } else{
              reject(req.response);
            }
          }
        }
      })
    }

    FB.login(function(response){
      if(response.status == "connected"){
        const fbtoken = response.authResponse.accessToken;
        const userid = response.authResponse.userID;
        //localStorage.setItem("currentUser", JSON.stringify({ fbtoken: fbtoken, userid: userid }));

        funcPost(fbtoken, userid)
        .then(res => {
          console.log(res);
        })
      }
    })
  }




}
