import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './module/material.module'

<<<<<<< HEAD
// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatCheckboxModule } from '@angular/material';

// frame
=======
//component
>>>>>>> e43564b28fbeeade386f3df7847898b81a13d019
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopicComponent } from './topic/topic.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { ProfileComponent } from './profile/profile.component';
import { MainFeedContentComponent } from './common/main-feed-content/main-feed-content.component';
import { NavigatorComponent } from './common/navigator/navigator.component';

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
    NavigatorComponent,
    ImagePathPipe
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatCardModule
=======
    BrowserModule, MaterialModule
>>>>>>> e43564b28fbeeade386f3df7847898b81a13d019
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
