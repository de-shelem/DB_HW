import { TestBed } from '@angular/core/testing';

import { AbstractService } from './abstract.service';

describe('AbstractSeriesService', () => {
  let service: AbstractService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
