import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//importas el httpClient (no te olvides de importar httpClientModule en app.module.ts)
import { Observable } from 'rxjs' //importo el Observable para tipar el método getPopularMovies()

@Injectable({
  providedIn: 'root' //aquí inyectamos el servicio en la aplicacion
})
export class PeliculasService {//generamos el servicio con ng g service [nombre del servicio]
  principalLoaded:boolean=false;
  constructor(private http: HttpClient) { } // aquí inyectamos el httpClient como dependencia del servicio PeliculasService

  getEstrenosPeliculas(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=57100bbbe8d760beada498e98fb84066&language=en-US&page=1');
  };

  getTodasPeliculas(page: Number, language: String, type: String): Observable<any> {
    //Conseguimos las peliculas mas populares
    switch (type) {
      case 'all':
        return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=57100bbbe8d760beada498e98fb84066&language=${language}&page=${page}`);
      case 'populares':
        return this.http.get(`http://api.themoviedb.org/3/movie/popular?api_key=57100bbbe8d760beada498e98fb84066&language=${language}&page=${page}`);
      case 'novedades':
        return this.http.get(`http://api.themoviedb.org/3/movie/upcoming?api_key=57100bbbe8d760beada498e98fb84066&language=${language}&page=${page}`);
      case 'mejor-puntuadas':
        return this.http.get(`http://api.themoviedb.org/3/movie/popular?api_key=57100bbbe8d760beada498e98fb84066&language=${language}&page=${page}`);
    }
  };

  getAllGenres():Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=57100bbbe8d760beada498e98fb84066&language=en-US`)
  }

  getPeliInfo(id: String, language: String): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=57100bbbe8d760beada498e98fb84066`);
  }

  getCreditsPeli(id: String, language: String): Observable<Object> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=57100bbbe8d760beada498e98fb84066&language=${language}`);
  };

  getTrailersPelis(id: String, language: String): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=57100bbbe8d760beada498e98fb84066&language=${language}`);
  };

   getPeliculasByYear(year:number):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=57100bbbe8d760beada498e98fb84066&year=${year}&primary_by=vote_average.dec`);

   }
   getPeliculasByYearI (desde:number,hasta:number):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=57100bbbe8d760beada498e98fb84066&primary_release_date.gte=${desde}-01-01&primary_release_date.lte=${hasta}-12-31`);

  }
  getPeliByGenre (genre:number,page:number):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=57100bbbe8d760beada498e98fb84066&with_genres=${genre}&page=${page}`);

  }

}
