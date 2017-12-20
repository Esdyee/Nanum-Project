import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../module/material.module';

import { FeedComponent } from './feed.component';
import { FeedService } from './feed.service';
import { AnswerComponent } from './components/answer/answer.component';
import { QuestionComponent } from './components/question/question.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    FeedComponent
  ],
  declarations: [
    FeedComponent,
    AnswerComponent,
    QuestionComponent,
    CommentComponent
  ],
  providers: [
    FeedService
  ]
})
export class FeedModule { }
