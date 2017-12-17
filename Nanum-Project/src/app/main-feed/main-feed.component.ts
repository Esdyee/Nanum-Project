import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AskModalComponent } from '../common/navigator/ask-modal/ask-modal.component';
import { QuestionService } from '../question-feed/question.service';


@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.css']
})
export class MainFeedComponent implements OnInit {
  answers = [];
  currentPage = 1;

  public me = {
    name: '김경훈',
    credential: 'fastcampus WPS 수강생',
    imgPath: 'assets/images/me.png'
  };

  constructor(public dialog: MatDialog, private questionService: QuestionService) { }

  ngOnInit() {
    this.getNextPage();
  }

  getNextPage() {
    this.questionService.getAnswers(this.currentPage).subscribe(
      res => {
        this.answers = [...this.answers, ...res.results];
        this.currentPage += 1;
      },
      error => console.log(error)
    );
  }

  fetchExpandedContent(id) {
    this.answers = this.answers.map(answer => {
      if (answer.id === id) {
      }
      return answer;
    });
  }

  openAskModal(name): void {
    const dialogRef = this.dialog.open(AskModalComponent, {
      width: '620px',
      data: { name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
