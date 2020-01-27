import { TestBed } from '@angular/core/testing';

import { MessangingService } from './messanging.service';

describe('MessangingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessangingService = TestBed.get(MessangingService);
    expect(service).toBeTruthy();
  });
});
