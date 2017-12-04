import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-question-feed-content',
  templateUrl: './question-feed-content.component.html',
  styleUrls: ['./question-feed-content.component.css']
})
export class QuestionFeedContentComponent {
  @Input() question;

  constructor() { }
}
