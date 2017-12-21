import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './feed/components/question/question.component';
import { AnswerComponent } from './feed/components/answer/answer.component';
import { CommentComponent } from './feed/components/comment/comment.component';
import { EditorComponent } from './feed/components/editor/editor.component';
import { MaterialModule } from '../module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule
  ],
  declarations: [
    QuestionComponent,
    AnswerComponent,
    CommentComponent,
    EditorComponent
  ],
  exports: [
    QuestionComponent,
    AnswerComponent,
    CommentComponent,
    EditorComponent
  ]
})
export class SharedModule { }
