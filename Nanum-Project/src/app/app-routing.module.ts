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
import { MainLeftComponent } from './main/main-left/main-left.component';
import { QuestionComponent } from './main/question/question.component';
import { AnswersComponent } from './main/answers/answers.component';

import { ProfileComponent } from './profile/profile.component';
// 라우트 구성
const routes: Routes = [
  { path: '', redirectTo: 'login/main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent, canActivate: [LoginGuard] },
  { path: 'question', component: MainComponent, canActivate: [LoginGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard] },
  { path: 'maintest', component: MainComponent },
  { path: '**', component: NotFoundComponent}
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
