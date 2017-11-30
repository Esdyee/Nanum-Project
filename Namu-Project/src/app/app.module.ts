import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import quill Module

import { QuillModule } from 'ngx-quill';

// component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopicComponent } from './topic/topic.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { ProfileComponent } from './profile/profile.component';
import { MainFeedContentComponent } from './common/main-feed-content/main-feed-content.component';
import { NavigatorComponent } from './common/navigator/navigator.component';
import { AnswerComponent } from './answer/answer.component';
import { AskModalComponent } from './common/navigator/ask-modal/ask-modal.component';

// pipe
import { ImagePathPipe } from './pipe/image-path.pipe';
import { TopicSelectComponent } from './main-feed/topic-select/topic-select.component';

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
    TopicSelectComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AskModalComponent,
    TopicSelectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
