import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
//라우트에 해당되는 것이 없을 때 나타나는 페이지
import { NotFoundComponent } from './common/not-found/not-found.coponent';

// 라우트 구성
const routes: Routes = [
  { path: '', redirectTo: '/login/main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  //필수 추가 요망
  { path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [
    LoginModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
