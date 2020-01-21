import { TestBed } from '@angular/core/testing';

import { InductionChecklistService } from './induction-checklist.service';

describe('InductionChecklistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InductionChecklistService = TestBed.get(InductionChecklistService);
    expect(service).toBeTruthy();
  });
});
