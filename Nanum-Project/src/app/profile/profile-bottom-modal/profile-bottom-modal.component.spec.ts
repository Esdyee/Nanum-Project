import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBottomModalComponent } from './profile-bottom-modal.component';

describe('ProfileBottomModalComponent', () => {
  let component: ProfileBottomModalComponent;
  let fixture: ComponentFixture<ProfileBottomModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileBottomModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBottomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
