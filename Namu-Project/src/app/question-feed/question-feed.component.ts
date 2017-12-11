import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';

// typings
import { Question, questions } from './question';

@Component({
  selector: 'app-question-feed',
  templateUrl: './question-feed.component.html',
  styleUrls: ['./question-feed.component.css']
})
export class QuestionFeedComponent implements OnInit {
  questions;

  constructor(private http: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
    // this.http.getQuestionss()
    //   .subscribe(
    //     questions => {
    //       console.log(questions);
    //     },
    //   error => {
    //       console.log(error);
    //   }
    // );
  }

  getQuestions(): void {
    this.questions = questions;
  }

}
