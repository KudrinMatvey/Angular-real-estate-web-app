import { TestBed, inject } from '@angular/core/testing';

import { AdService } from './ads.service';

describe('AdsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdService]
    });
  });

  it('should be created', inject([AdService], (service: AdService) => {
    expect(service).toBeTruthy();
  }));
});
