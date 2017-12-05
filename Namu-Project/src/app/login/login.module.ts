// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MaterialModule } from './module/material.module';

import { LoginRoutingModule } from './login-routing.module';
import { MainLoginComponent } from './main-login/main-login.component';
import { FindPasswordComponent } from './find-password/find-password.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule
    ],
    declarations: [
        MainLoginComponent,
        FindPasswordComponent
    ]
})
export class LoginModule { }
