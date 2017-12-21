import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProfileTopModalComponent } from './profile-top-modal/profile-top-modal.component';
import { ProfileBottomModalComponent } from './profile-bottom-modal/profile-bottom-modal.component';
import { ProfileMiddleModalComponent } from './profile-middle-modal/profile-middle-modal.component';
import { ProfileService } from './profile.service';
import { ProfileFollowModalComponent } from './profile-follow-modal/profile-follow-modal.component';

interface Resume {
  pk: number;
  type: string;
  content: string;
}

interface Interest {
  pk: number;
  type: string;
  content: string;
}

interface Experts {
  pk: number;
  type: string;
  content: string;
}




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(public dialog: MatDialog, public profileService: ProfileService) { }


  // TEST_DUMMY_USER_DATA ---> 페이지 구성 각 부분별로 API가 있다.

  DUMMY_USER_PROFILE = {
    Name: '김경훈',
    Article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.',
    Resume: [
      { pk: 1, type: 'Job', content: '지식서비스 Nanum Founder' },
      { pk: 2, type: 'Job', content: '대통령' },
      { pk: 3, type: 'School', content: '성균관대학교' },
      { pk: 4, type: 'School', content: '서울고등학교' }
    ],
    Activity: {
      Answer_View: '555',
      Answers: '1,400',
      Stars: '77,777',
      Follow: '100',
      Follower: '200'
    },
    Interest: [
      { pk: 1, type: 'Interest', content: 'Interest-test0' },
      { pk: 2, type: 'Interest', content: 'Interest-test1' },
      { pk: 3, type: 'Interest', content: 'Interest-test2' },
      { pk: 4, type: 'Interest', content: 'Interest-test3' },
      { pk: 5, type: 'Interest', content: 'Interest-test4' },
      { pk: 6, type: 'Interest', content: 'Interest-test5' },
      { pk: 7, type: 'Interest', content: 'Interest-test6' },
      { pk: 8, type: 'Interest', content: 'Interest-test7' },
    ],

    Experts: [
      { pk: 1, type: 'Experts', content: 'Experts-test0' },
      { pk: 2, type: 'Experts', content: 'Experts-test1' },
      { pk: 3, type: 'Experts', content: 'Experts-test2' },
      { pk: 4, type: 'Experts', content: 'Experts-test3' },
      { pk: 5, type: 'Experts', content: 'Experts-test4' },
      { pk: 6, type: 'Experts', content: 'Experts-test5' },
      { pk: 7, type: 'Experts', content: 'Experts-test6' },
      { pk: 8, type: 'Experts', content: 'Experts-test7' },
    ]
  };




  // Test Logic

  userArticle: string;
  userResume: any[];
  // isArticleOvered: boolean; / 더보기 기능 삭제로 주석처리
  // isClicked: boolean; / 더보기 기능 삭제로 주석처리
  isSignIn: boolean;
  isOnMouse_TopContent: boolean;
  isOnMouse_MiddleContent: boolean;
  isOnMouse_BottomContent: boolean;
  // 사진 업로드 테스트!
  dataUrl: string[] = [];
  // 하단부 사진 컨테이너
  interestContainer: Interest[] = [];
  expertContainer: Experts[] = [];

  // 테스팅 페이지 조작 로직
  TEST_userName: string;
  TEST_userArticle: string;

  // Server 통신 테스트 로직
  userProfile: object[];
  userPk = 1;


  ngOnInit() {
    // this.userArticle = this.DUMMY_USER_PROFILE.Article;
    this.userResume = this.DUMMY_USER_PROFILE.Resume;
    this.isOnMouse_TopContent = false;
    this.isOnMouse_MiddleContent = false;
    this.isOnMouse_BottomContent = false;
    this.isSignIn = true; // 추후에 로그인 관련 컴포넌트가 개발 완료되면 기본값으로 false를 부여할 예정
    // 하단부 테스트
    this.interestContainer = [...this.DUMMY_USER_PROFILE.Interest];
    this.expertContainer = [...this.DUMMY_USER_PROFILE.Experts];
  }


  // 사진 업로드 테스트!
  // readUrl(event) {
  //   const reader = new FileReader();
  //   reader.onload = (loadEvent: any) => {
  //     this.dataUrl.push(loadEvent.target.result);
  //   };
  //   reader.readAsDataURL(event.target.files[0]);
  // }



  // getUserName(): string {
  //   return this.DUMMY_USER_PROFILE.Name;
  // }

  // getUserArticle(): string {
  //   const _userArticle = this.profileService.userProfile.description;

  //   return _userArticle;
  // }


  // 여기까지 상단

  getUserResumeIcon(resume: object): string {
    if ('company' in resume) {
      return 'business_center';
    }
    if ('school' in resume) {
      return 'school';
    }
    return;
  }

  openProfileTopModal(): void {
    const dialogRef = this.dialog.open(ProfileTopModalComponent, {
      width: '620px'
    });
  }

  openProfileMiddleModal(): void {
    const dialogRef = this.dialog.open(ProfileMiddleModalComponent, {
      width: '620px',
      data: {
        Resume: this.DUMMY_USER_PROFILE.Resume
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // 여기까지 중단

  // TEST_modifyUserArticle() {
  //   if (this.TEST_userArticle) {
  //     this.userArticle = this.TEST_userArticle;
  //     this.DUMMY_USER_PROFILE.Article = this.TEST_userArticle;
  //     this.TEST_userArticle = '';
  //   }
  // }


  ProfileFollowModalComponent(): void {
    const dialogRef = this.dialog.open(ProfileFollowModalComponent, {
      width: '380px',
      data: { interestContainer: this.interestContainer }
    });
  }

  openProfileBottomModal(calledBy: number): void {
    const dialogRef = this.dialog.open(ProfileBottomModalComponent, {
      width: '620px',
      data: {
        calledBy,
        UserSelectedInterests: this.interestContainer,
        UserSelectedExperts: this.expertContainer
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
