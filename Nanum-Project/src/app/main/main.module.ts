import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FeedModule } from '../shared/feed/feed.module';
import { MainLeftComponent } from './main-left/main-left.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

import { NavigatorModule } from '../shared/navigator/navigator.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FeedModule,
    FormsModule,
    MaterialModule,
    NavigatorModule
  ],
  declarations: [
    MainComponent,
    MainLeftComponent,
  ]
})
export class MainModule { }
