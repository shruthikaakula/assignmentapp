import { TestBed } from '@angular/core/testing';

import { 25thService } from './25th.service';

describe('25thService', () => {
  let service: 25thService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(25thService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
