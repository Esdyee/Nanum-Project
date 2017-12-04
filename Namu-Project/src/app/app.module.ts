import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './module/material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopicComponent } from './topic/topic.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { ProfileComponent } from './profile/profile.component';
import { MainFeedContentComponent } from './common/main-feed-content/main-feed-content.component';
import { NavigatorComponent } from './common/navigator/navigator.component';
import { AnswerComponent } from './answer/answer.component';
import { AskModalComponent } from './common/navigator/ask-modal/ask-modal.component';
import { QuillEditorComponent } from './common/quill-editor/quill-editor.component';
//import { MainLoginComponent } from './login/main-login/main-login.component';
//import { FindPasswordComponent } from './login/find-password/find-password.component';
import { NotFoundComponent } from './common/not-found/not-found.coponent';

// pipe
import { ImagePathPipe } from './pipe/image-path.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopicComponent,
    MainFeedComponent,
    ProfileComponent,
    MainFeedContentComponent,
    NavigatorComponent,
    ImagePathPipe,
    NavigatorComponent,
    AskModalComponent,
    AnswerComponent,
    QuillEditorComponent,
    //MainLoginComponent,
    //FindPasswordComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, MaterialModule, AppRoutingModule, FormsModule
  ],
  entryComponents: [AskModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
