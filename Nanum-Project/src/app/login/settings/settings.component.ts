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
    <button type="submit" class="btn-settings" mat-raised-button [disabled]="!settingsForm.valid">비밀번호 변경</button>
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
    // paylord
    const codeData = this.active.snapshot.paramMap.get('code');
    const uidData = this.active.snapshot.paramMap.get('uid');
    const userdata = { code: codeData, uid: uidData};

    // 이메일로 해당 페이지에 접속한 것인지 확인
    this.http.post(this.path.api_path + 'user/password-reset/confirm/',
    JSON.stringify(userdata), { headers: { 'Content-Type': 'application/json' } })
      .subscribe((response: UserData) => {
        if (response.pk && response.token) {
          console.log(response);
          localStorage.setItem('findPassword', JSON.stringify(response));
        } else {
          this.router.navigate(['/login/find']);
        }
      }, err => {
        this.router.navigate(['/login/find']);
      }
    );

    // settingsForm 구성
    this.settingsForm = new FormGroup({
      'passwordFormControl': new FormControl('', Validators.required),
      'passwordConfFormControl': new FormControl('', [Validators.required, this.match])
    });
  }

  onSubmit() {
    // Paylord 생성
    const data: UserData = JSON.parse(localStorage.getItem('findPassword'));
    const paylord = { pk: data.pk, token: data.token
      , password1: this.passwordFormControl.value, password2: this.passwordConfFormControl.value };

    // 변경할 Password 전송
    this.http.post(this.path.api_path + 'user/password-reset/', paylord)
    .subscribe(res => {
      // 결과처리
      alert('비밀번호 변경이 완료되었습니다. \n다시 로그인해 주시기 바랍니다.');
      this.router.navigate(['/login/main']);
    }, err => {
      // 에러 처리
      if (err.non_field_errors) {
        alert(err.non_field_errors);
      } else {
        alert('비밀번호 변경에 실패하였습니다.');
      }
    });
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
