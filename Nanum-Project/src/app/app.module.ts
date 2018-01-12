import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { FeedModule } from './shared/feed/feed.module';
import { NavigatorModule } from './shared/navigator/navigator.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopicComponent } from './topic/topic.component';
import { ProfileComponent } from './profile/profile.component';
import { TopicSelectComponent } from './topic-select/topic-select.component';
import { ProfileFollowModalComponent } from './profile/profile-follow-modal/profile-follow-modal.component';
import { ProfileBottomModalComponent } from './profile/profile-bottom-modal/profile-bottom-modal.component';
import { ProfileMiddleModalComponent } from './profile/profile-middle-modal/profile-middle-modal.component';
import { ProfileTopModalComponent } from './profile/profile-top-modal/profile-top-modal.component';


// Service
import { MenuService } from './service/menu.service';
import { ProfileService } from './profile/profile.service';
import { QuestionService } from './service/question.service';
import { AskModalComponent } from './shared/components/ask-modal/ask-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopicComponent,
    ProfileComponent,
    TopicSelectComponent,
    ProfileFollowModalComponent,
    ProfileBottomModalComponent,
    ProfileMiddleModalComponent,
    ProfileTopModalComponent,
    ProfileFollowModalComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FeedModule,
    NavigatorModule
  ],
  entryComponents: [
    TopicSelectComponent,
    AskModalComponent,
    ProfileMiddleModalComponent,
    ProfileBottomModalComponent,
    ProfileTopModalComponent,
    ProfileFollowModalComponent,
  ],
  providers: [ProfileService, MenuService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
