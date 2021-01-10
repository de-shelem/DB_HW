import { TestBed } from '@angular/core/testing';

import { BoyPigService } from './boy-pig.service';

describe('BoyPigService', () => {
  let service: BoyPigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoyPigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
