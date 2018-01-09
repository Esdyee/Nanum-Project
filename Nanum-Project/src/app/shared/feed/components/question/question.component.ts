import { Component, Input, OnChanges } from '@angular/core';

import { FeedService } from '../../feed.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnChanges {
  isEditMode = false;
  answerHeader;
  timeStamp: string;

  topics = [];

  constructor(private feedService: FeedService) { }
  @Input() question;

  ngOnChanges() {
    this.question.topics.forEach(topicURL => this.getDetails(topicURL));
    this.timeStamp = this.feedService.getTimeStamp(new Date(this.question.question.modified_at));
  }

  getDetails(url) {
    this.feedService.getTopicDetail(url).subscribe(
      res => {
        this.topics.push(res);
      }
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
