import { TestBed } from '@angular/core/testing';

import { CoronaDetailService } from './corona-detail.service';

describe('CoronaDetailService', () => {
  let service: CoronaDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
