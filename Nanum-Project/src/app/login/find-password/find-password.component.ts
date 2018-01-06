import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm, AsyncValidator } from '@angular/forms';
import { Router } from '@angular/router';

// Service
import { AppService } from '../../app.service';
import { AuthService } from '../auth.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-find-password',
  // templateUrl: './find-password.component.html',
  template: `
  <section class="find-password">
    <h1 class="tit-introduce">NANUM</h1>
    <form [formGroup]="findPWForm" (ngSubmit)="onSubmit()" novalidate class="find-form">
      <mat-form-field class="find-full-width">
        <input matInput placeholder="Email" [formControl]="emailFormControl"
               [errorStateMatcher]="matcher">
        <mat-hint>이메일을 입력해주세요.</mat-hint>
        <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
          <strong>이메일 양식</strong>에 맞추어서 입력해주시기 바랍니다.
        </mat-error>
        <mat-error *ngIf="emailFormControl.hasError('required')">
          이메일을 <strong>입력</strong>해 주시기 바랍니다.
        </mat-error>
        <mat-error *ngIf="!!emailError">
          {{emailError}}
        </mat-error>
      </mat-form-field>
      <p class="txt-introduce">
        기존에 가입하신 이메일 주소를 입력해 주시면 임시 비밀번호가 발송됩니다.
      </p>
      <button type="submit" class="btn-find" mat-raised-button
      [disabled]="!(emailFormControl.valid)">비밀번호 찾기</button>
    </form>
  </section>
  `,
  styleUrls: ['./find-password.component.css']
})
export class FindPasswordComponent implements OnInit {
  findPWForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  emailError = '';

  constructor(private http: HttpClient, private path: AppService, private router: Router) { }

  ngOnInit() {
    this.findPWForm = new FormGroup({
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });
  }

  onSubmit() {
    const paylord = { email : this.emailFormControl.value };
    this.http.post(this.path.api_path + 'user/password-reset/send-mail/', JSON.stringify(paylord)
    , { headers: { 'Content-Type': 'application/json' }})
      .subscribe(result => {
        console.log(result);
        if (result === true) {
          // login successful
          // this.router.navigate(['/login/main']);
          console.log('success');
        }
      }, err => {
        console.log(err);
        if (err.status === 400) {
          // 이메일 validation
          this.emailError = err.error.email[0];
          this.findPWForm.patchValue({ emailFormControl: '' });
        }
      });
  }

  // Form Data Return
  get emailFormControl() {
    return this.findPWForm.get('emailFormControl');
  }
}
