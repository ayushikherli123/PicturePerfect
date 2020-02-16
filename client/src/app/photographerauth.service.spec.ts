import { TestBed, inject } from '@angular/core/testing';

import { PhotographerauthService } from './photographerauth.service';

describe('PhotographerauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotographerauthService]
    });
  });

  it('should be created', inject([PhotographerauthService], (service: PhotographerauthService) => {
    expect(service).toBeTruthy();
  }));
});
