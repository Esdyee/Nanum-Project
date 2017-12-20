import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';


@Component({
  selector: 'app-question-feed',
  templateUrl: './question-feed.component.html',
  styleUrls: ['./question-feed.component.css']
})
export class QuestionFeedComponent implements OnInit {
  isEditMode = false;
  answerHeader;

  questions = [];
  currentPage = 1;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getNextPage();
  }

  negativeFeedback(pk) {
    console.log(pk);
  }

  getNextPage() {
    this.questionService.getQuestions(this.currentPage).subscribe(
      res => {
        this.questions = [...this.questions, ...res.results];
        // this.questions = [...this.questions, ...res.results];
        console.log(this.questions);
        this.currentPage += 1;
      },
      err => console.log(err)
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
}
