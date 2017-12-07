import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
   
    checkAuth() : boolean{
        const isAuth = Math.random() < 0.5;
        //let isAuth;
        //this.id == "superuser@super.com" && this.password == "superuse" ? isAuth = true : isAuth = false;
        isAuth ? alert('인증된 사용자') : alert('인증되지 않은 사용자')
        return isAuth;
    }

    canActivate() {
        return this.checkAuth();
    }
}

