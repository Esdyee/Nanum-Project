import { TestBed, inject } from '@angular/core/testing';

import { TopicSeletService } from './topic-selet.service';

describe('TopicSeletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopicSeletService]
    });
  });

  it('should be created', inject([TopicSeletService], (service: TopicSeletService) => {
    expect(service).toBeTruthy();
  }));
});
