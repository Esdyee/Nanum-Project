import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute, RouterState } from '@angular/router';

import { AskModalComponent } from '../components/ask-modal/ask-modal.component';
// test 나중에 main-feed로 이동
import { TopicSelectComponent } from '../../topic-select/topic-select.component';

// 더미 유저 import
import { users } from '../../mocks/user';


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
  inputText: string;
  // 더미에서 me(김경훈)만 가져오기
  user = users.me;

  isShow: boolean;

  tabStatus: string;

  tabLinks: TabLink[];

  routerStatus = this.route.snapshot.url.join();


  constructor(public dialog: MatDialog,
    private router: Router, private route: ActivatedRoute) {
    }

  ngOnInit() {
    this.tabStatus = this.routerStatus;
    this.tabLinks = [
      { label: '읽기', link: '/answer', status: 'feed' },
      { label: '답변하기', link: '/question', status: 'feed'  },
      { label: '프로필', link: '/profile', status: 'profile'  },
      { label: '포스트', link: '/post', status: 'profile'  }
    ];
  }

  // 모달 오픈
  openAskModal(): void {
    const dialogRef = this.dialog.open(AskModalComponent, {
      width: '620px',
      // 이름 참조해서 사용
      data: { name: this.user.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  // test 사용자가 토픽 선택 정보가 없을시 작동해야함 나중에 main-feed로 이동
  openTopicSelectModal(): void {
    const dialogRef = this.dialog.open(TopicSelectComponent, {
      width: '800px',
    //  height: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logOut() {
    localStorage.removeItem('currentUser');
    location.reload();
  }

}
