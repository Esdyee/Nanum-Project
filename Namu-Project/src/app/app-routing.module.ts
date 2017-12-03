import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './common/not-found/not-found.coponent';

// 라우트 구성
const routes: Routes = [
  { path: '', redirectTo: '/login/main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
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
