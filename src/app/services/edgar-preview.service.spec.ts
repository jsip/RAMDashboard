import { TestBed } from '@angular/core/testing';

import { EdgarPreviewService } from './edgar-preview.service';

describe('EdgarPreviewService', () => {
  let service: EdgarPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdgarPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
