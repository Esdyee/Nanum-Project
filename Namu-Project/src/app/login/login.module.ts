// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MaterialModule } from './module/material.module';

import { LoginRoutingModule } from './login-routing.module';
import { MainLoginComponent } from './main-login/main-login.component';
import { FindPasswordComponent } from './find-password/find-password.component';
import { LoginConnectComponent } from './login-connect/login-connect.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        MainLoginComponent,
        FindPasswordComponent,
        LoginConnectComponent,
        SignupComponent
    ]
})
export class LoginModule { }
