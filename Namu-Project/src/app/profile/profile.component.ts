import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ProfileTopicModalComponent } from './profile-topic-modal/profile-topic-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openProfileTopicModal(): void {
    const dialogRef = this.dialog.open(ProfileTopicModalComponent, {
      width: '620px',
      // 이름 참조해서 사용
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
