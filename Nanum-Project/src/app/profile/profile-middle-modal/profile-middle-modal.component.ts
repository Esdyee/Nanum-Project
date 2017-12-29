import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-profile-middle-modal',
  templateUrl: './profile-middle-modal.component.html',
  styleUrls: ['./profile-middle-modal.component.css']
})
export class ProfileMiddleModalComponent implements OnInit {

  constructor(public thisdialogRef: MatDialogRef<ProfileMiddleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public profileService: ProfileService) { }

  credentialAddOptions: object[] = [
    { id: 1, type: 'Employment' },
    { id: 2, type: 'Education' },
    { id: 3, type: 'Location' },
    { id: 4, type: 'Topic' },
    { id: 5, type: 'Language' },
  ];

  yearBox: number[] = [];
  isJobClicked: boolean;
  isSchoolClicked: boolean;
  isWorkHere: boolean;

  position: string;
  companyOrganization: string;
  startYear: number;
  endYear: number;

  degreeType: string;
  graduationYear: number;
  schoolName: string;
  concentrationName: string;

  ngOnInit(): void {
    this.isJobClicked = false;
    this.isSchoolClicked = false;

    for (let year = 1900; year <= 2017; year++) {
      this.yearBox.push(year);
    }
    this.isWorkHere = false;

    this.position = '';
    this.companyOrganization = '';
    this.startYear = 2017;
    this.endYear = 2017;
    this.isWorkHere = false;

    this.degreeType = '';
    this.concentrationName = '';
    this.schoolName = '';
    this.graduationYear = 2017;
  }


  getUserResumeIcon(resume: object): string {
    if ('company' in resume) {
      return 'business_center';
    }
    if ('school' in resume) {
      return 'school';
    }
    return;
  }

  toggleMatMenu(idOfMenu: string): void {
    console.log(idOfMenu);

    if (idOfMenu === 'job') {
      this.isJobClicked = true;

    }
    if (idOfMenu === 'school') {
      this.isSchoolClicked = true;
    }
  }

  settingYearsOfCredential(event): void {
    console.log(event);
    if (event.id === 'startYear') {
      this.startYear = event.value;
      console.log(this.startYear);
    }

    if (event.id === 'endYear') {
      this.endYear = event.value;
      console.log(this.endYear);
    }

    if (event.id === 'graduationYear') {
      this.graduationYear = event.value;
    }
  }

  toggleIsWorkHere(): void {
    this.isWorkHere = !this.isWorkHere;
    console.log(this.isWorkHere);
  }

  sendEducationCredentialPayload(): void {
    const payload = {
      school_id: 3,
      concentration_id: 3,
      degree_type: this.degreeType,
      graduation_year: this.graduationYear
    };
    this.profileService.createEducationCredential(payload);
    // console.log(payload);
  }

  sendEmploymentCredentialPayload(): void {
    const payload = {
      company_id: 5,
      position: this.position,
      start_year: this.startYear,
      end_year: this.endYear,
      working_status: this.isWorkHere
    };
    this.profileService.createEmploymentCredential(payload);
    // console.log(payload);
  }
}
