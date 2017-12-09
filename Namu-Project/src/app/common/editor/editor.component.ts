import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit{
  isShow = true;
  constructor() { }
  ngOnInit() {
  }
  close() {
    this.isShow = !this.isShow;
  }

}
