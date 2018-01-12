import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material';

import { AskModalComponent } from '../components/ask-modal/ask-modal.component';
import { FeedService } from './feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  user = this.feedService.user;

  // type = 'question' || 'answer' (default: question)
  type = this.route.snapshot.url.join();
  nextURL: string;
  results = [];

  constructor(private feedService: FeedService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.feedService.getFirstPage(this.type).subscribe(
      res => {
        this.results = [...this.results, ...res.results];
        this.nextURL = res.next;
      },
        err => console.log(err)
    );
  }

  openAskModal(name): void {
    const dialogRef = this.dialog.open(AskModalComponent, {
      width: '620px',
      data: { name }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  onScrollBottom() {
    if (this.nextURL) {
      this.feedService.fetchNextPage(this.nextURL).subscribe(
        res => {
          this.results = [...this.results, ...res.results];
          this.nextURL = res.next;
        },
        err => console.log(err)
      );
    }
  }

  typeChange() {
    this.type = 'questions' ? 'answers' : 'questions';
  }
}
