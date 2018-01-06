import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, FormGroupName, NgForm, AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
// import { PasswordValidator } from '../validator/password-validator';

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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  emailError = '';
  passwordError = '';

  constructor(private http: HttpClient, private path: AppService, private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.signup(this.emailFormControl.value, this.passwordFormControl.value
      , this.passwordConfFormControl.value, this.nameFormControl.value)
      .subscribe(result => {
        if (result === true) {
          // login successful
          this.router.navigate(['/answer']);
        }
      }, err => {
        if (err.status === 400) {
          console.log(err);
        }
      });
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'nameFormControl': new FormControl('', [
        Validators.required
      ]),
      'emailFormControl': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      // passwordGroup: new FormGroup({
      //   passwordFormControl: new FormControl('', Validators.required),
      //   passwordConfFormControl: new FormControl('', Validators.required)
      // })
      'passwordFormControl': new FormControl('', Validators.required),
      'passwordConfFormControl': new FormControl('', [Validators.required, this.match])
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
  get nameFormControl() {
    return this.signupForm.get('nameFormControl');
  }
  get passwordGroup() {
    return this.signupForm.get('passwordGroup');
  }
  get emailFormControl() {
    return this.signupForm.get('emailFormControl');
  }

  get passwordFormControl() {
    return this.signupForm.get('passwordFormControl');
  }

  get passwordConfFormControl() {
    return this.signupForm.get('passwordConfFormControl');
  }
}
