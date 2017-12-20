import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FeedModule } from '../shared/feed/feed.module';
import { MainLeftComponent } from './main-left/main-left.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FeedModule
  ],
  declarations: [
    MainComponent,
    MainLeftComponent
  ]
})
export class MainModule { }
