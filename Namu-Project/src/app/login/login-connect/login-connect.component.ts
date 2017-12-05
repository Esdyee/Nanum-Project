import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login-connect',
  //templateUrl: './login-connect.component.html',
  template: `
  <section class="email-login">
    <h1 class="tit-introduce">NANUM</h1>
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" novalidate>
      <div class="input-login">
        <label for="email">로그인</label>
        <input type="text" name="email" placeholder="이메일" formControlName="email">
        <p *ngIf="email.errors?.required && email.touched" class="alert" style="background-color:red;">
        이메일을 입력해 주시기 바랍니다.
        </p>
        <p *ngIf="email.errors?.pattern && email.touched" class="alert" style="background-color:red;">
        이메일 양식에 맞추어서 입력해주시기 바랍니다.
        </p>
        <input type="text" name="password" placeholder="비밀번호">
      </div>
      <button class="btn-login">로그인</button>
    </form>

  </section>
  `,
  styleUrls: ['./login-connect.component.css']
})
export class LoginConnectComponent implements OnInit {
  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i)
      ])
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

}
