import { TestBed } from '@angular/core/testing';

import { TavernServiceService } from './tavern-service.service';

describe('TavernServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TavernServiceService = TestBed.get(TavernServiceService);
    expect(service).toBeTruthy();
  });
});
