import { Component, Input, OnChanges } from '@angular/core';

import { FeedService } from '../../feed/feed.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnChanges {
  isEditMode = false;
  answerHeader;

  topics = [];

  constructor(private feedService: FeedService) { }
  @Input() question;

  ngOnChanges() {
    this.question.topics.forEach(topicURL => this.getDetails(topicURL));
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
