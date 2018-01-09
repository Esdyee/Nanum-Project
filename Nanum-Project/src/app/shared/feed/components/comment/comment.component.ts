import { Component, Input, OnInit } from '@angular/core';

import { FeedService } from '../../feed.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  // depends on AnswerComponent(pk, ...)
  @Input() pk: number;
  commentText: string;
  user = this.feedService.user;
  comments = [];
  nextURL: string;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.getFirstPage('comment', [`answer=${this.pk}`]).subscribe(
      res => {
        this.comments = [...this.comments, ...res.results];
        this.nextURL = res.next;
      },
      err => console.log(err),
      () => {
        this.comments.forEach(comment => this.getAuthor(comment));
        /*this.comments = this.comments.map(comment => {
          Object.assign(comment, {
            created_at: this.feedService.getTimeStamp(new Date(comment.created_at))
          });
        });*/
      }
    );
  }

  getAuthor(comment) {
    this.feedService.getAuthorProfile(comment.user).subscribe(
      res => {
        comment.user = res;
      },
      err => console.log(err)
    );
  }

  submitComment() {
    const payload = {
      answer: this.pk,
      content: this.commentText
    };
    this.feedService.postComment(payload).subscribe(
      res => {
        this.commentText = '';
        this.getAuthor(res);
        this.comments = [res, ...this.comments];
      },
      err => console.log(err)
    );
  }
}
