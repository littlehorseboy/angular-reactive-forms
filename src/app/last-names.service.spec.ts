import { TestBed } from '@angular/core/testing';

import { LastNamesService } from './last-names.service';

describe('LastNamesService', () => {
  let service: LastNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
