import { TestBed } from '@angular/core/testing';

import { TickerSyncService } from './ticker-sync.service';

describe('TickerSyncService', () => {
  let service: TickerSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TickerSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
