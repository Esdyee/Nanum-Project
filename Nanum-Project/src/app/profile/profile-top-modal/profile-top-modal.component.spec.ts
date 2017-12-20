import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTopModalComponent } from './profile-top-modal.component';

describe('ProfileTopModalComponent', () => {
  let component: ProfileTopModalComponent;
  let fixture: ComponentFixture<ProfileTopModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTopModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTopModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
