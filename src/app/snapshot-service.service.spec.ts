import { TestBed } from '@angular/core/testing';

import { SnapshotServiceService } from './snapshot-service.service';

describe('SnapshotServiceService', () => {
  let service: SnapshotServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnapshotServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
