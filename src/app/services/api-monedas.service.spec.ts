import { TestBed } from '@angular/core/testing';

import { ApiMonedasService } from './api-monedas.service';

describe('ApiMonedasService', () => {
  let service: ApiMonedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMonedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
