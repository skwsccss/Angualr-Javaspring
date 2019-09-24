import { TestBed, inject } from '@angular/core/testing';

import { SurveyClientService } from './survey-client.service';

describe('SurveyClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyClientService]
    });
  });

  it('should be created', inject([SurveyClientService], (service: SurveyClientService) => {
    expect(service).toBeTruthy();
  }));
});
