import { TestBed } from '@angular/core/testing';

import { PigletService } from './piglet.service';

describe('PigletService', () => {
  let service: PigletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PigletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
