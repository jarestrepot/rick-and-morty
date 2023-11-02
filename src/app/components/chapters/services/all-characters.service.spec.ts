import { TestBed } from '@angular/core/testing';

import { AllCharactersService } from './all-characters.service';

describe('AllCharactersService', () => {
  let service: AllCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
