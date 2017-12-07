import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AskModalComponent } from './ask-modal/ask-modal.component';

// 더미 유저 import
import { users } from '../../main-feed/user';

// test
import { TopicSelectComponent } from '../../main-feed/topic-select/topic-select.component';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent {

  // 더미에서 me(김경훈)만 가져오기
  user = users.me;

  constructor(public dialog: MatDialog) { }
  // 모달 오픈
  openAskModal(): void {
    const dialogRef = this.dialog.open(AskModalComponent, {
      width: '620px',
      // 이름 참조해서 사용
      data: { name: this.user.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // test 사용자가 토픽 선택 정보가 없을시 작동해야함
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

}
