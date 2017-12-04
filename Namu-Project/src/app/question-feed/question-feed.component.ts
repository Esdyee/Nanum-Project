import { Component, OnInit } from '@angular/core';

// typings
import { Question, questions } from './question';

@Component({
  selector: 'app-question-feed',
  templateUrl: './question-feed.component.html',
  styleUrls: ['./question-feed.component.css']
})
export class QuestionFeedComponent implements OnInit {
  questions;

  constructor() { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questions = questions;
  }

}
