import { TestBed } from '@angular/core/testing';

import { ShipApiService } from './ship-api.service';

describe('ShipApiService', () => {
  let service: ShipApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
