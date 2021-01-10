import { TestBed } from '@angular/core/testing';

import { GraftService } from './graft.service';

describe('GraftService', () => {
  let service: GraftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
