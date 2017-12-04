import { Component, Input } from '@angular/core';
import { expandedContents } from './expanded-content';

@Component({
  selector: 'app-main-feed-content',
  templateUrl: './main-feed-content.component.html',
  styleUrls: ['./main-feed-content.component.css']
})
export class MainFeedContentComponent {
  negative = false;
  isExpanded = false;
  @Input() answer;

  constructor() { }

  test() {
    console.log('done');
  }

  // 전체 답변내용은 각 컴포넌트가 독립적으로 통신해야함 => GET 완료 후 액션버튼 show
  // 답변내용과 댓글 스레드를 함께 받아야
  fetchExpandedContent(id) {
    this.getCommentThreads();
    this.answer.content = expandedContents[id].content;
    this.isExpanded = true;
  }

  getCommentThreads() {
    console.log('GET comments');
  }

  negativeFeedback() {
    this.negative = !this.negative;
  }
}
