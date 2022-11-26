import { TestBed } from '@angular/core/testing';

import { DatauserService } from './datauser.service';

describe('DatauserService', () => {
  let service: DatauserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatauserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
