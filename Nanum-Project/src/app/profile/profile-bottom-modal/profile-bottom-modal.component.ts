import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


// data: {
//   calledBy,
//   UserSelectedInterests: this.interestContainer,
//   UserSelectedExperts: this.expertContainer
// }

@Component({
  selector: 'app-profile-bottom-modal',
  templateUrl: './profile-bottom-modal.component.html',
  styleUrls: ['./profile-bottom-modal.component.css']
})
export class ProfileBottomModalComponent implements OnInit {

  constructor(public thisdialogRef: MatDialogRef<ProfileBottomModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  calledBy: string;
  MODAL_interestListContainer: any[] = this.data.UserSelectedInterests;
  MODAL_expertsListConatiner: any[] = this.data.UserSelectedExperts;

  ngOnInit() {
    console.log(this.data.UserSelectedInterests);
  }

  selectedContainer() {
    if (this.data.calledBy == 1) {
      this.calledBy = 'Interest';
      return this.MODAL_interestListContainer;
    }
    if (this.data.calledBy == 2) {
      this.calledBy = 'Experts';
      return this.MODAL_expertsListConatiner;
    }
  }

  onNoClick(): void {
    this.thisdialogRef.close();
  }
}
