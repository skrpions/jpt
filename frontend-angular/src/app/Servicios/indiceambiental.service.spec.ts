import { TestBed } from '@angular/core/testing';

import { IndiceambientalService } from './indiceambiental.service';

describe('IndiceambientalService', () => {
  let service: IndiceambientalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndiceambientalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
