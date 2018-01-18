import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FeedModule } from '../shared/feed/feed.module';
import { MainLeftComponent } from './main-left/main-left.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../module/material.module';
import { NavTabComponent } from '../common/nav-tab/nav-tab.component';
import { AnswersComponent } from '../main/answers/answers.component';
import { QuestionComponent } from '../main/question/question.component';
import { QuestionDetailComponent } from '../question-detail/question-detail.component';


import { TabFilterPipe } from '../common/navigator/tab-filter.pipe';

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
    NavigatorComponent,
    NavTabComponent,
    AnswersComponent,
    QuestionComponent,
    QuestionDetailComponent,
    TabFilterPipe
  ]
})
export class MainModule { }
