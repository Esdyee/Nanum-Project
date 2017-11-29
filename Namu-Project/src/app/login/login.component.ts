import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  //templateUrl: './login.component.html',
  template: `
  <div class="back-image" [style.backgroundImage]="''">
    <div class="layer">
      <p>이제 전문적인 정보를 찾으로 헤메지 마세요.</p>
      <p>지식 공유 네트워크, 나눔입니다.</p>
      <button>로그인</button>
      <button>페이스북으로 로그인</button>
      <div class="account">
        <button>비밀번호 찾기</button> |
        <button>회원가입</button>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
