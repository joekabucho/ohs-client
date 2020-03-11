import { TestBed } from '@angular/core/testing';

import { JobAnalysisService } from './job-analysis.service';

describe('JobAnalysisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobAnalysisService = TestBed.get(JobAnalysisService);
    expect(service).toBeTruthy();
  });
});
