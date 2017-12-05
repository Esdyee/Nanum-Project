import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
// 라우트에 해당되는 것이 없을 때 나타나는 페이지
import { NotFoundComponent } from './common/not-found/not-found.component';
import { QuestionFeedComponent } from './question-feed/question-feed.component';
import { NavigatorComponent } from './common/navigator/navigator.component';

// 라우트 구성
const routes: Routes = [
  { path: '', redirectTo: '/login/main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainFeedComponent },
  { path: 'questions', component: QuestionFeedComponent },
  { path: 'nav', component: NavigatorComponent },
  { path: '**', component: NotFoundComponent},
  // 필수 추가 요망
  // 메인피드 임시 path 입니다
];


@NgModule({
  imports: [
    LoginModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
