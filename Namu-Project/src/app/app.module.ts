import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './module/material.module'

// import quill Module

import { QuillModule } from 'ngx-quill';

//material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

//component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopicComponent } from './topic/topic.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { ProfileComponent } from './profile/profile.component';
import { MainFeedContentComponent } from './common/main-feed-content/main-feed-content.component';
import { NavigatorComponent } from './common/navigator/navigator.component';
import { AnswerComponent } from './answer/answer.component';
import { QuillEditorComponent } from './common/quill-editor/quill-editor.component';

//pipe
import { ImagePathPipe } from './pipe/image-path.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopicComponent,
    MainFeedComponent,
    ProfileComponent,
    MainFeedContentComponent,
<<<<<<<
    NavigatorComponent,
    ImagePathPipe
=======
    NavigatorComponent,
    AnswerComponent,
    QuillEditorComponent
>>>>>>>
  ],
  imports: [
<<<<<<<
    BrowserModule, MaterialModule
=======
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    QuillModule
>>>>>>>
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
