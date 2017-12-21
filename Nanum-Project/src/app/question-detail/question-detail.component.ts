import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuestionService } from '../question-feed/question.service';
import { FeedService } from '../shared/feed/feed.service';
import { FeedComponent } from '../shared/feed/feed.component';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  isEditMode = false;
  answerHeader;
  answers = [];
  questions = [];
  currentPage = 1;

  constructor(private questionService: QuestionService, private feedService: FeedService) { }

  ngOnInit() {
    this.getQuestion();
    this.getAnswer();
    this.getFirstPage();
  }
  
  getFirstPage() {
    this.feedService.getFirstPage();
  }

  getQuestion() {
    this.questionService.getQuestions(this.currentPage).subscribe(
      res => {
        this.questions = [...this.questions, ...res.results];
        this.currentPage += 1;
      },
      err => console.log(err)
    );
  }

  getAnswer() {
    this.questionService.getAnswers(this.currentPage).subscribe(
      res => {
        this.answers = [...this.answers, ...res.results];
        this.currentPage += 1;
      },
      error => console.log(error)
    );
  }

  openEditor(question) {
    this.answerHeader = {
      pk: question.pk,
      content: question.content
    };
    this.isEditMode = !this.isEditMode;
  }

  closeEditor(e) { // false value from editor component
    this.isEditMode = e;
  }

  fetchExpandedContent(id) {
    this.answers = this.answers.map(answer => {
      if (answer.id === id) {
      }
      return answer;
    });
  }
}
