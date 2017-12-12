import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';

// typings
import { Question } from './question';

@Component({
  selector: 'app-question-feed',
  templateUrl: './question-feed.component.html',
  styleUrls: ['./question-feed.component.css']
})
export class QuestionFeedComponent implements OnInit {
  questions = [];
  currentPage = 1;

  constructor(private http: QuestionService) { }

  ngOnInit() {
    this.loadQuestions();
  }

  negativeFeedback(pk) {
    console.log(pk);
  }

  loadQuestions() {
    this.http.getFeed(this.currentPage)
    .subscribe(
      res => {
        this.questions = [...this.questions, ...res.results];
        console.log(this.questions);
        this.currentPage += 1;
      },
      error => {
        console.log(error);
      }
    );
  }
}
