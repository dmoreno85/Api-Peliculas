import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//importas el httpClient (no te olvides de importar httpClientModule en app.module.ts)
import { Observable } from 'rxjs' //importo el Observable para tipar el método getPopularMovies()

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  constructor(private http: HttpClient) { } // aquí inyectamos el httpClient como dependencia del servicio PeliculasService

  getEstrenosSeries(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/tv/latest?api_key=57100bbbe8d760beada498e98fb84066&language=${language}&page=${page}');
  };

  getTodasSeries(page: Number, language: String, type: String): Observable<any> {
    //Conseguimos las peliculas mas populares
    switch (type) {
      case "all":
        return this.http.get(`https://api.themoviedb.org/3/discover/tv?api_key=57100bbbe8d760beada498e98fb84066&language=${language}&page=${page}`);
      case "populares":
        return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=57100bbbe8d760beada498e98fb84066&language=${language}&page=${page}`);
      case "mejor-puntuadas":
        return this.http.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=57100bbbe8d760beada498e98fb84066&language=${language}&page=${page}`);

    }
  };

  getInfoSerie(id: String, language: String): Observable<Object> {
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=57100bbbe8d760beada498e98fb84066&language=${language}`);
  };

  getCreditsSerie(id: String, language: String): Observable<Object> {
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=57100bbbe8d760beada498e98fb84066&language=${language}`);
  };

  getTrailerSeries(id: String, language: String): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=57100bbbe8d760beada498e98fb84066&language=${language}`);
  };

  getSeriesByYear(year:number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/discover/tv/?api_key=57100bbbe8d760beada498e98fb84066&year=${year}`);
  };
}

