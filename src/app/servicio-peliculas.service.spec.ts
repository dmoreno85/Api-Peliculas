import { TestBed } from '@angular/core/testing';

import { ServicioPeliculasService } from './servicio-peliculas.service';

describe('ServicioPeliculasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioPeliculasService = TestBed.get(ServicioPeliculasService);
    expect(service).toBeTruthy();
  });
});
