import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, FormGroupName, NgForm, AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

// Service
import { AppService } from '../../app.service';
import { AuthService } from '../auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

// 유저정보 Interface

interface UserData {
  pk: number;
  token: string;
  type: string;
}

@Component({
  selector: 'app-settings',
  // templateUrl: './settings.component.html',
  template : `
  <section class="settings">
  <h1 class="tit-introduce">NANUM</h1>

  <form [formGroup]="settingsForm" (ngSubmit)="onSubmit()" novalidate class="settings-form">

    <mat-form-field class="settings-full-width">
      <input type="password" matInput placeholder="Password" [formControl]="passwordFormControl" [errorStateMatcher]="matcher" #password>
      <mat-hint>비밀번호를 입력해주세요.</mat-hint>
      <mat-error *ngIf="passwordFormControl.hasError('required')">
        비밀번호를 <strong>입력</strong>해 주시기 바랍니다.
      </mat-error>
    </mat-form-field>

    <mat-form-field class="settings-full-width">
      <input type="password" matInput placeholder="Password-conf" [formControl]="passwordConfFormControl" [errorStateMatcher]="matcher">
      <mat-hint>확인을 위해 비밀번호를 입력해주세요.</mat-hint>
      <mat-error *ngIf="passwordError && passwordConfFormControl.hasError('required')">
        {{passwordError}}
      </mat-error>
      <mat-error *ngIf="passwordConfFormControl.hasError('required')">
        비밀번호를 <strong>입력</strong>해 주시기 바랍니다.
      </mat-error>
    </mat-form-field>
    <button type="submit" class="btn-settings" mat-raised-button [disabled]="!settingsForm.valid">회원가입</button>
  </form>
</section>
  `,
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingsForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  emailError = '';
  passwordError = '';

  constructor(private http: HttpClient, private path: AppService, private auth: AuthService, private router: Router
    , private active: ActivatedRoute) { }

  ngOnInit() {
    console.log('connect');
    const codeData = this.active.snapshot.paramMap.get('code');
    const uidData = this.active.snapshot.paramMap.get('uid');
    const userdata = { code: codeData, uid: uidData};
    // console.log(this.path.api_path + 'user/password-reset/confirm/');
    // console.log(JSON.stringify(userdata));

    this.http.post(this.path.api_path + 'user/password-reset/confirm/',
    JSON.stringify(userdata), { headers: { 'Content-Type': 'application/json' } })
      .subscribe((response: UserData) => {
        if (response.pk && response.token) {
          console.log('connect');
        } else {
          this.router.navigate(['/login/find']);
        }
      }, err => {
        this.router.navigate(['/login/find']);
      }
    );

    console.log('formSettings');
    this.settingsForm = new FormGroup({
      'nameFormControl': new FormControl('', [
        Validators.required
      ]),
      'emailFormControl': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'passwordFormControl': new FormControl('', Validators.required),
      'passwordConfFormControl': new FormControl('', [Validators.required, this.match])
    });
  }

  onSubmit() {

  }

  match(control: AbstractControl) {
    // 매개변수로 전달받은 검증 대상 폼 모델에서 password와 confirmPassword을 취득
    if (control.value !== '') {
      const password = control.parent.value.passwordFormControl;
      const confirmPassword = control.value;

      // password와 confirmPassword의 값을 비교한다.
      if (password !== confirmPassword) {
        return { match: { password, confirmPassword } };
      } else {
        return null;
      }
    }
  }

  // Form Data Return

  get passwordGroup() {
    return this.settingsForm.get('passwordGroup');
  }

  get passwordFormControl() {
    return this.settingsForm.get('passwordFormControl');
  }

  get passwordConfFormControl() {
    return this.settingsForm.get('passwordConfFormControl');
  }
}
