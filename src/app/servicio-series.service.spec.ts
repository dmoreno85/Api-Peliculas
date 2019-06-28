import { TestBed } from '@angular/core/testing';

import { ServicioSeriesService } from './servicio-series.service';

describe('ServicioSeriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioSeriesService = TestBed.get(ServicioSeriesService);
    expect(service).toBeTruthy();
  });
});
