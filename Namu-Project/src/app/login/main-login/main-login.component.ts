import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-login',
  //templateUrl: './main-login.component.html',
  template:`
  <div class="back-image">
  <div class="layer">
    <section class="login">
      <h1 class="tit-introduce">NANUM</h1>
      <p class="txt-introduce">
        이제 전문적인 정보를 찾으로 헤메지 마세요.<br> 지식 공유 네트워크, 나눔입니다.
      </p>
      <form name="form-login" class="form-login">
        <div class="btn-login">
          <button class="email-login">로그인</button>
          <button class="facebook-login">페이스북으로 로그인</button>
        </div>
        <div class="account">
          <button class="find-password"
          routerLink="../find" 
          >비밀번호 찾기</button> |
          <button class="btn-signup">회원가입</button>
        </div>
      </form>
    </section>
  </div>
</div>
  `,
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private navRoute: Router) { }

  ngOnInit() {
  }

  findPassword(){
    this.navRoute.navigate(['find']);
  }

}
