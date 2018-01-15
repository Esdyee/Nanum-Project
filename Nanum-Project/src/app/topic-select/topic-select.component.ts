import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { TopicSeletService } from './topic-selet.service';

interface TopicFollow {
  topics: number[];
}

@Component({
  selector: 'app-topic-select',
  templateUrl: './topic-select.component.html',
  styleUrls: ['./topic-select.component.css']
})
export class TopicSelectComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  topicInterestList: TopicFollow = { topics: [] };
  topicExpertiseList: TopicFollow = { topics: [] };

  constructor(
    public topicSeletService: TopicSeletService,
    private _formBuilder: FormBuilder,
    public thisdialogRef: MatDialogRef<TopicSelectComponent>
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  createInterestList(pk: number, chkStatus: boolean) {
    if (chkStatus === true) {
      this.topicInterestList.topics = Object.assign(
        this.topicInterestList.topics,
        this.topicInterestList.topics.splice(Number.MAX_VALUE, 0, pk)
      );
    } else {
      this.topicInterestList.topics = this.topicInterestList.topics.filter(
        pkArr => pkArr !== pk
      );
    }
  }

  createExpertiseList(pk: number, chkStatus: boolean) {
    if (chkStatus === true) {
      this.topicExpertiseList.topics = Object.assign(
        this.topicExpertiseList.topics,
        this.topicExpertiseList.topics.splice(Number.MAX_VALUE, 0, pk)
      );
    } else {
      this.topicExpertiseList.topics = this.topicExpertiseList.topics.filter(
        pkArr => pkArr !== pk
      );
    }
  }

  submitTopicFollow() {
    this.topicSeletService
      .postInterestFollow(this.topicInterestList)
      .subscribe(res => {}, err => console.log(err));
    this.topicSeletService
      .postExpertiseFollow(this.topicExpertiseList)
      .subscribe(res => {}, err => console.log(err));
    this.thisdialogRef.close();
  }
}
