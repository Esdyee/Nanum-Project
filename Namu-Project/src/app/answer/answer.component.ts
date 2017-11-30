import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  isShow = true;
  isChecked = false;
  isFollowing = false;
  constructor() { }

  ngOnInit() {
  }
  
  removeItem() {
    this.isShow = !this.isShow;
  }

  changeChecked() {
    this.isChecked = !this.isChecked;
  }

  following() {
    this.isFollowing = !this.isFollowing;
  }
}
