import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../module/material.module';
import { QuillModule } from 'ngx-quill';

import { FeedComponent } from './feed.component';
import { AnswerComponent } from './components/answer/answer.component';
import { QuestionComponent } from './components/question/question.component';
import { CommentComponent } from './components/comment/comment.component';
import { EditorComponent } from './components/editor/editor.component';
import { FeedService } from './feed.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    QuillModule
  ],
  exports: [
    FeedComponent,
  ],
  declarations: [
    FeedComponent,
    AnswerComponent,
    QuestionComponent,
    CommentComponent,
    EditorComponent,
  ],
  providers: [
    FeedService
  ]
})
export class FeedModule { }
