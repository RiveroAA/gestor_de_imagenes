import { TestBed } from '@angular/core/testing';

import { StrapiRequestsService } from './strapi-requests.service';

describe('StrapiRequestsService', () => {
  let service: StrapiRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrapiRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
