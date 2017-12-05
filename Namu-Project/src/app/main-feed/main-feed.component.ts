import { Component, OnInit } from '@angular/core';

// dummys
import { Answer, answers, expandedContents } from './answer';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.css']
})
export class MainFeedComponent implements OnInit {
  answers;

  // 로그인 사용자 정보 (dummy)
    // 사용처: 메인피드의 질문하기 버튼, 댓글달기, 질문피드의 답변달기
    // 메인페이지, 질문피드 페이지 로드 시 전역에서 쥐고 있어야 하는 || 또는 토큰정보를 참조해야하는 데이터
  public me = {
    name: '김경훈',
    credential: 'fastcampus WPS 수강생',
    imgPath: 'assets/images/me.png'
  };

  constructor() { }

  ngOnInit() {
    this.getAnswers();
  }

  getAnswers(): void {
    this.answers = answers;
  }

  fetchExpandedContent(id) {
    this.answers = this.answers.map(answer => {
      if (answer.id === id) {
        Object.assign(answer, expandedContents[id]);
      }
      return answer;
    });
  }
}
