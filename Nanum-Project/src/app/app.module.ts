import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common/';

import { MaterialModule } from './module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { FeedModule } from './shared/feed/feed.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopicComponent } from './topic/topic.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { ProfileComponent } from './profile/profile.component';
import { NavigatorComponent } from './common/navigator/navigator.component';
import { AskModalComponent } from './common/navigator/ask-modal/ask-modal.component';
// import { MainLoginComponent } from './login/main-login/main-login.component';
// import { FindPasswordComponent } from './login/find-password/find-password.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { QuestionFeedComponent } from './question-feed/question-feed.component';

import { TopicSelectComponent } from './main-feed/topic-select/topic-select.component';
import { NavTabComponent } from './common/nav-tab/nav-tab.component';
import { ProfileFollowModalComponent } from './profile/profile-follow-modal/profile-follow-modal.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { MainComponent } from './main/main.component';
// 기존에 Answer가 있어서 ==> Answers로 지정
import { AnswersComponent } from './main/answers/answers.component';
import { MainLeftComponent } from './main/main-left/main-left.component';
import { ProfileBottomModalComponent } from './profile/profile-bottom-modal/profile-bottom-modal.component';
import { ProfileMiddleModalComponent } from './profile/profile-middle-modal/profile-middle-modal.component';
import { ProfileTopModalComponent } from './profile/profile-top-modal/profile-top-modal.component';

// Service
import { QuestionService } from './question-feed/question.service';
import { MenuService } from './service/menu.service';
import { ProfileService } from './profile/profile.service';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopicComponent,
    MainFeedComponent,
    ProfileComponent,
    NavigatorComponent,
    AskModalComponent,
    AskModalComponent,
    TopicSelectComponent,
    // MainLoginComponent,
    // FindPasswordComponent,
    NotFoundComponent,
    QuestionFeedComponent,
    NavTabComponent,
    QuestionDetailComponent,
    ProfileFollowModalComponent,
    MainComponent,
    MainLeftComponent,
    AnswersComponent,
    ProfileBottomModalComponent,
    ProfileMiddleModalComponent,
    ProfileTopModalComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    QuillModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FeedModule
  ],
  exports: [
    MaterialModule
  ],
  entryComponents: [
    AskModalComponent,
    TopicSelectComponent,
    ProfileMiddleModalComponent,
    ProfileBottomModalComponent,
    ProfileTopModalComponent
  ],
  providers: [QuestionService, ProfileService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
