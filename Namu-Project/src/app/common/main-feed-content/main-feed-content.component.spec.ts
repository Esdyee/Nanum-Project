import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeedContentComponent } from './main-feed-content.component';

describe('MainFeedContentComponent', () => {
  let component: MainFeedContentComponent;
  let fixture: ComponentFixture<MainFeedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFeedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFeedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
