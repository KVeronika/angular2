import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcService]
    });
  });

  it('should be created', inject([CalcService], (service: CalcService) => {
    expect(service).toBeTruthy();
  }));

  it('should return sum', inject([CalcService], (service: CalcService) => {
    expect(service.sum(3, 8)).toBe(11);
  }));

  it('should return async sum', fakeAsync(inject([CalcService], (service: CalcService) => {
    service.symAsync(3, 8).then(result => {
      expect(result).toBe(11);
    });
    tick(3000);
  })));
});
