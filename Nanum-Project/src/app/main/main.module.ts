import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FeedModule } from '../shared/feed/feed.module';
import { MainLeftComponent } from './main-left/main-left.component';
import { NavigatorComponent } from '../common/navigator/navigator.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../module/material.module';
import { NavTabComponent } from '../common/nav-tab/nav-tab.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FeedModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    MainComponent,
    MainLeftComponent,
    NavigatorComponent,
    NavTabComponent
  ]
})
export class MainModule { }
