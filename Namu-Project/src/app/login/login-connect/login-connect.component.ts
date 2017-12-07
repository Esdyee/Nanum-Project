import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginGuard } from '../login.guard';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-connect',
  //templateUrl: './login-connect.component.html',
  template: `
  <section class="email-login">
    <h1 class="tit-introduce">NANUM</h1>

    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" novalidate class="login-form">
      <mat-form-field class="login-full-width">
        <input matInput placeholder="Email" [formControl]="emailFormControl"
               [errorStateMatcher]="matcher">
        <mat-hint>이메일을 입력해주세요.</mat-hint>
        <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
          이메일을 <strong>입력</strong>해 주시기 바랍니다.
        </mat-error>
        <mat-error *ngIf="emailFormControl.hasError('required')">
          <strong>이메일 양식</strong>에 맞추어서 입력해주시기 바랍니다.
        </mat-error>
      </mat-form-field>

      <mat-form-field class="login-full-width">
        <input type="password" matInput placeholder="Password" [formControl]="passwordFormControl"
               [errorStateMatcher]="matcher">
        <mat-hint>비밀번호를 입력해주세요.</mat-hint>
        <mat-error *ngIf="passwordFormControl.hasError('required')">
          비밀번호를 <strong>입력</strong>해 주시기 바랍니다.
        </mat-error>
      </mat-form-field>

    </form>
    <button class="btn-login" mat-raised-button routerLink="../../main">로그인</button>
  </section>
  `,
  styleUrls: ['./login-connect.component.css']
})
export class LoginConnectComponent implements OnInit {
  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(public auth : LoginGuard) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passwordFormControl: new FormControl('', [
        Validators.required
      ])
    });
  }

  onSubmit(){
    console.log(1);
    console.log(this.emailFormControl.value);
    this.auth.id = this.emailFormControl.value;
    this.auth.password = this.passwordFormControl.value;
  }

  //Form Data Return
  get emailFormControl() {
    return this.loginForm.get('emailFormControl');
  }

  get passwordFormControl() {
    return this.loginForm.get('passwordFormControl');
  }

}
