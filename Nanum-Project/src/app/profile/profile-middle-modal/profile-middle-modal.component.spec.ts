import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMiddleModalComponent } from './profile-middle-modal.component';

describe('ProfileMiddleModalComponent', () => {
  let component: ProfileMiddleModalComponent;
  let fixture: ComponentFixture<ProfileMiddleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMiddleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMiddleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
