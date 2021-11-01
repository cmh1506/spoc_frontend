import { TestBed } from '@angular/core/testing';

import { MaterialverwendungService } from './materialverwendung.service';

describe('MaterialverwendungService', () => {
  let service: MaterialverwendungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialverwendungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
