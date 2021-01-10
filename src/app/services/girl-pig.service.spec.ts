import { TestBed } from '@angular/core/testing';

import { GirlPigService } from './girl-pig.service';

describe('GirlPigService', () => {
  let service: GirlPigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GirlPigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
