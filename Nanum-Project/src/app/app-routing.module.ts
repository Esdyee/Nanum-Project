import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './login/login.guard';

import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { MainComponent } from './main/main.component';
// 라우트에 해당되는 것이 없을 때 나타나는 페이지
import { NotFoundComponent } from './common/not-found/not-found.component';
import { NavigatorComponent } from './common/navigator/navigator.component';
import { EditorComponent } from './common/editor/editor.component';
import { MainLoginComponent } from './login/main-login/main-login.component';
import { FindPasswordComponent } from './login/find-password/find-password.component';
import { LoginConnectComponent } from './login/login-connect/login-connect.component';
import { SignupComponent } from './login/signup/signup.component';
import { MainLeftComponent } from './main/main-left/main-left.component';
// 라우트 구성
const routes: Routes = [
  { path: '', redirectTo: 'login/main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,
    children: [
      { path: 'main', component: MainLoginComponent },
      { path: 'find', component: FindPasswordComponent },
      { path: 'connect', component: LoginConnectComponent },
      { path: 'signup', component: SignupComponent },
      { path: '**', component: NotFoundComponent },
    ] },
  { path: 'main', component: MainFeedComponent, canActivate: [LoginGuard],
    children: [
      { path: 'leftmenu', component: MainLeftComponent }
    ]
  },
  { path: 'maintest', component: MainComponent },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    LoginModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
