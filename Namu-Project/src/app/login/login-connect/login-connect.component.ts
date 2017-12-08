import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { AppService } from '../../app.service';
import { AuthService } from '../auth.service';
import 'rxjs/add/operator/map';

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
        <mat-error *ngIf="error && passwordFormControl.hasError('required')">
          이메일 혹은 비밀번호가 일치하지 않습니다.
        </mat-error>
        <mat-error *ngIf="!error && passwordFormControl.hasError('required')">
          비밀번호를 <strong>입력</strong>해 주시기 바랍니다.
        </mat-error>
      </mat-form-field>
      <button type="submit" class="btn-login" mat-raised-button>로그인</button>
      {{error}}
      {{!passwordFormControl.hasError('required')}}
    </form>
    
  </section>
  `,
  styleUrls: ['./login-connect.component.css']
})
export class LoginConnectComponent implements OnInit {
  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  error:string = '';

  constructor(private http: HttpClient, private path: AppService, private auth: AuthService, private router:Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passwordFormControl: new FormControl('', [
        Validators.required,
      ])
    });
  }

  onSubmit(){
    //this.loading = true;
    this.auth.login(this.emailFormControl.value, this.passwordFormControl.value)
      .subscribe(result => {
        if (result === true) {
          // login successful
          this.router.navigate(['/main']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect';
          //this.loading = false;
        }
      }, err => {
        console.log(err);
        this.error = JSON.parse(err._body).email[0];
        //this.loginForm.reset();
        console.log(this.loginForm);
        this.loginForm.patchValue({ passwordFormControl:""})
      });
  }

  //Form Data Return
  get emailFormControl() {
    return this.loginForm.get('emailFormControl');
  }

  get passwordFormControl() {
    return this.loginForm.get('passwordFormControl');
  }

}
