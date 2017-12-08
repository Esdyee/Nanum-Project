import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

class Question {
  question: {
    pk: number;
    user: number;
    content: string;
    created_at: string; // 'yyyy-mm-dd'
  };
  topics: number[];
}

@Component({
  selector: 'app-ask-modal',
  templateUrl: './ask-modal.component.html',
  styleUrls: ['./ask-modal.component.css']
})
export class AskModalComponent {

  constructor(
    public thisdialogRef: MatDialogRef<AskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.thisdialogRef.close();
  }

}
