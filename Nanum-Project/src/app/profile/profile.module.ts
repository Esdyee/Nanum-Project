import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedModule } from '../shared/feed/feed.module';
import { ProfileComponent } from './profile.component';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { NavigatorModule } from '../shared/navigator/navigator.module';
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
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
