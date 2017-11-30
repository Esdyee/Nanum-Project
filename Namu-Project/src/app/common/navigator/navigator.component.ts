import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AskModalComponent } from './ask-modal/ask-modal.component';
import { TopicSelectComponent } from '../../main-feed/topic-select/topic-select.component';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent {

  name = '신지섭';

  constructor(public dialog: MatDialog) { }
  // 모달 오픈
  openAskModal(): void {
    const dialogRef = this.dialog.open(AskModalComponent, {
      width: '600px',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openTopicSelectModal(): void {
    const dialogRef = this.dialog.open(TopicSelectComponent, {
      width: '800px',
      height: '600px',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  nextClick() {

  }
}
