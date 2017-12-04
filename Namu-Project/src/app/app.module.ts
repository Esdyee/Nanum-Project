import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './module/material.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopicComponent } from './topic/topic.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { ProfileComponent } from './profile/profile.component';
import { MainFeedContentComponent } from './common/main-feed-content/main-feed-content.component';
import { NavigatorComponent } from './common/navigator/navigator.component';

// pipe
import { QuestionFeedComponent } from './question-feed/question-feed.component';
import { QuestionFeedContentComponent } from './common/question-feed-content/question-feed-content.component';
import { CommentsComponent } from './common/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopicComponent,
    MainFeedComponent,
    ProfileComponent,
    MainFeedContentComponent,
    NavigatorComponent,
    AnswerComponent,
    AskModalComponent,
    QuestionFeedComponent,
    QuestionFeedContentComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule, MaterialModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
