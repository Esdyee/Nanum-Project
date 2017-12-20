import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProfileService } from '../profile.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile-top-modal',
  templateUrl: './profile-top-modal.component.html',
  styleUrls: ['./profile-top-modal.component.css']
})
export class ProfileTopModalComponent implements OnInit {
  profileImage: string;
  replaceProfileImage: string;
  form: FormGroup;
  loading = false;

  minimalIntroduction: string;
  mainIntroduction: string;

  constructor(public thisdialogRef: MatDialogRef<ProfileTopModalComponent>, private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, public profileService: ProfileService) {
      this.form = this.formBuilder.group({
        image: ['', Validators.required]
      });
      this.profileImage = this.profileService.userProfile.thumbnail_image_200;
    }


  ngOnInit() {
  }

  onFileChange(files) {
    if (files && files.length > 0) {
      const reader = new FileReader();
      const file = files[0];
      this.replaceProfileImage = this.profileImage;

      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        // this.image = reader.result;
        this.profileImage = event.target.result;
      };
      this.image.setValue(file.name);
    }
  }

  clearFile(fileInput) {
    this.image.setValue(null);
    fileInput.value = '';
    this.profileImage = this.replaceProfileImage;
  }

  onSubmit(files) {
    const formData = new FormData();
    formData.append('image', files[0]);
    this.loading = true;
    this.profileService.editProfileImage(formData);
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  get image() {
    return this.form.get('image');
  }

  onSubmitArticle() {
    const formData = new FormData();
    formData.append('main_credential', this.minimalIntroduction);
    formData.append('description', this.mainIntroduction);
    this.profileService.editProfileArticle(formData);
  }

  onNoClick() {
    this.thisdialogRef.close();
  }

}
