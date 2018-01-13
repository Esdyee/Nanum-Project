import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedModule } from '../shared/feed/feed.module';
import { ProfileComponent } from './profile.component';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { NavigatorModule } from '../shared/navigator/navigator.module';
import { ProfileTopModalComponent } from './profile-top-modal/profile-top-modal.component';
import { ProfileMiddleModalComponent } from './profile-middle-modal/profile-middle-modal.component';
import { ProfileBottomModalComponent } from './profile-bottom-modal/profile-bottom-modal.component';
import { ProfileFollowModalComponent } from './profile-follow-modal/profile-follow-modal.component';
import { ProfileService } from './profile.service';

@NgModule({
  imports: [
    CommonModule,
    FeedModule,
    MaterialModule,
    SharedModule,
    NavigatorModule
  ],
  declarations: [
    ProfileComponent,
    ProfileTopModalComponent,
    ProfileMiddleModalComponent,
    ProfileBottomModalComponent,
    ProfileFollowModalComponent
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
