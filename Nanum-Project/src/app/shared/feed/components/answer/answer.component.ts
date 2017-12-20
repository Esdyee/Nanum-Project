import { Component, Input, OnChanges } from '@angular/core';

import { FeedService } from '../../feed.service';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnChanges {
  topics = [];

  constructor(private feedService: FeedService) { }
  @Input() answer;

  ngOnChanges() {
    this.getDetails();
  }

  getDetails() {
    // 질문정보 추가 요청
    this.feedService.getParentQuestion(this.answer.question).subscribe(
      res => {
        this.answer.question = res;
      },
      err => console.log(err),
      () => {
        // topic 정보 추가 요청
        this.answer.question.topics.forEach(topicURL => {
          this.feedService.getTopicDetail(topicURL).subscribe(
            res => {
              this.topics = [...this.topics, res];
            });
        });
      });
    // 작성자정보 추가 요청
    this.feedService.getAuthorProfile(this.answer.user).subscribe(
      res => {
        this.answer.user = res;
      },
      err => console.log(err)
    );
  }
}
