import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './module/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopicComponent } from './topic/topic.component';
import { ProfileComponent } from './profile/profile.component';
import { AskModalComponent } from './common/navigator/ask-modal/ask-modal.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { TopicSelectComponent } from './main-feed/topic-select/topic-select.component';
import { ProfileFollowModalComponent } from './profile/profile-follow-modal/profile-follow-modal.component';
import { ProfileBottomModalComponent } from './profile/profile-bottom-modal/profile-bottom-modal.component';
import { ProfileMiddleModalComponent } from './profile/profile-middle-modal/profile-middle-modal.component';
import { ProfileTopModalComponent } from './profile/profile-top-modal/profile-top-modal.component';
import { AccountSettingsComponent } from './common/navigator/account-settings/account-settings.component';

// Service
import { MenuService } from './service/menu.service';
import { ProfileService } from './profile/profile.service';
import { SharedModule } from './shared/shared.module';

// pipe
import { TabFilterPipe } from './common/navigator/tab-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopicComponent,
    ProfileComponent,
    AskModalComponent,
    TopicSelectComponent,
    NotFoundComponent,
    ProfileFollowModalComponent,
    ProfileBottomModalComponent,
    ProfileMiddleModalComponent,
    ProfileTopModalComponent,
    ProfileFollowModalComponent,
    AccountSettingsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    MaterialModule
  ],
  entryComponents: [
    AskModalComponent,
    TopicSelectComponent,
    ProfileMiddleModalComponent,
    ProfileBottomModalComponent,
    ProfileTopModalComponent,
    ProfileFollowModalComponent
  ],
  providers: [ProfileService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
