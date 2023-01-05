import { TestBed } from '@angular/core/testing';

import { SnapshotApiService } from './snapshot-api.service';

describe('SnapshotApiService', () => {
  let service: SnapshotApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnapshotApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
