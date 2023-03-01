import { TestBed } from '@angular/core/testing';

import { CapxService } from './capx.service';

describe('CapxService', () => {
  let service: CapxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
