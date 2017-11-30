import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  isShow = true;
  isChecked = false;
  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.isShow = !this.isShow;
  }

  changeChecked() {
    this.isChecked = !this.isChecked;
  }

}
