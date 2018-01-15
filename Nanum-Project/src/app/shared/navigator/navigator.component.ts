import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute, RouterState } from '@angular/router';

import { AskModalComponent } from '../components/ask-modal/ask-modal.component';
import { FeedService } from '../../shared/feed/feed.service';
// feed로 이동
import { TopicSelectComponent } from '../../topic-select/topic-select.component';
import { TopicSeletService } from '../../topic-select/topic-selet.service';

interface TabLink {
  label: string;
  link: string;
  status: string;
}

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css'],
})
export class NavigatorComponent implements OnInit {
  user = this.feedService.user;
  inputText: string;
  tabStatus: string;
  tabLinks: TabLink[];
  routerStatus = this.route.snapshot.url.join();

  constructor(
    private topicSeletService: TopicSeletService,
    private feedService: FeedService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.tabStatus = this.routerStatus;
    this.tabLinks = [
      { label: '읽기', link: '/answer', status: 'feed' },
      { label: '답변하기', link: '/question', status: 'feed'  },
      { label: '프로필', link: '/profile', status: 'profile'  },
      { label: '포스트', link: '/post', status: 'profile'  }
    ];
    this.openTopicSelectModal();
  }

  openAskModal(): void {
    const dialogRef = this.dialog.open(AskModalComponent, {
      width: '620px',
      data: { name: this.user.name },
    });
  }

  openTopicSelectModal() {
    this.topicSeletService.getFollowTopicList().subscribe(
      res => {
        if (res.results.length === 0) {
          this.topicSelectModal();
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  topicSelectModal(): void {
    const dialogRef = this.dialog.open(TopicSelectComponent, {
      width: '800px',
      disableClose: true
    });
  }

  logOut() {
    localStorage.removeItem('currentUser');
    location.reload();
  }
}
