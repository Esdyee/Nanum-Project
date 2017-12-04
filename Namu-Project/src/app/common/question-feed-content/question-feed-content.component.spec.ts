import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFeedContentComponent } from './question-feed-content.component';

describe('QuestionFeedContentComponent', () => {
  let component: QuestionFeedContentComponent;
  let fixture: ComponentFixture<QuestionFeedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFeedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFeedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
