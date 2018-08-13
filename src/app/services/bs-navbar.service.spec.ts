import { TestBed, inject } from '@angular/core/testing';

import { BsNavbarService } from './bs-navbar.service';

describe('BsNavbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BsNavbarService]
    });
  });

  it('should be created', inject([BsNavbarService], (service: BsNavbarService) => {
    expect(service).toBeTruthy();
  }));
});
