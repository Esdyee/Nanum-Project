import { Component, OnInit } from '@angular/core';
import Quill from 'quill';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.css']
})
export class QuillEditorComponent implements OnInit {
  isShow = true;
  constructor() { }
  editor;

  ngOnInit() {
  }
  close() {
    this.isShow = !this.isShow;
  }

  getContents() {

  }
}
