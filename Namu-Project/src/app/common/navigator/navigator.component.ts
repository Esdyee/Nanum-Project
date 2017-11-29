import { Component, OnInit } from '@angular/core';

import { AskModalComponent } from './ask-modal/ask-modal.component';
import { MatDialog } from '@angular/material';

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

}
