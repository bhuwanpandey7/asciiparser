import { TestBed } from '@angular/core/testing';

import { AsciiHelperService } from './ascii-helper.service';

describe('AsciiHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsciiHelperService = TestBed.get(AsciiHelperService);
    expect(service).toBeTruthy();
  });
});
