import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../module/material.module';

import { FeedComponent } from './feed.component';
import { FeedService } from './feed.service';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    FeedComponent,
  ],
  declarations: [
    FeedComponent
  ],
  providers: [
    FeedService
  ]
})
export class FeedModule { }
