import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuillModule } from 'ngx-quill';

import { MaterialModule } from './material.module';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';
import { CommentComponent } from './components/comment/comment.component';
import { EditorComponent } from './components/editor/editor.component';
import { AskModalComponent } from './components/ask-modal/ask-modal.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TimeStampPipe } from './feed/time-stamp.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule
  ],
  declarations: [
    AnswerComponent,
    AskModalComponent,
    CommentComponent,
    EditorComponent,
    NotFoundComponent,
    QuestionComponent,
    TimeStampPipe
  ],
  exports: [
    AnswerComponent,
    AskModalComponent,
    CommentComponent,
    EditorComponent,
    NotFoundComponent,
    QuestionComponent,
  ]
})
export class SharedModule { }
