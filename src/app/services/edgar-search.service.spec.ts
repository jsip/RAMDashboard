import { TestBed } from '@angular/core/testing';

import { EdgarSearchService } from './edgar-search.service';

describe('EdgarSearchService', () => {
  let service: EdgarSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdgarSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
