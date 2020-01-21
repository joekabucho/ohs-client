import { TestBed } from '@angular/core/testing';

import { ToolboxTalkService } from './toolbox-talk.service';

describe('ToolboxTalkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToolboxTalkService = TestBed.get(ToolboxTalkService);
    expect(service).toBeTruthy();
  });
});
