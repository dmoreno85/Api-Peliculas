import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//importas el httpClient (no te olvides de importar httpClientModule en app.module.ts)
import { Observable } from 'rxjs' //importo el Observable para tipar el método getPopularMovies()

@Injectable({
  providedIn: 'root' //aquí inyectamos el servicio en la aplicacion
})
export class PeliculasService {//generamos el servicio con ng g service [nombre del servicio]

  constructor(private http: HttpClient) { } // aquí inyectamos el httpClient como dependencia del servicio PeliculasService

  getEstrenosPeliculas():Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=57100bbbe8d760beada498e98fb84066&language=en-US&page=1');
  };

  getTodasPeliculas(page:Number, language:String):Observable<any>{
    //Conseguimos las peliculas mas populares
    return this.http.get(`http://api.themoviedb.org/3/movie/popular?api_key=57100bbbe8d760beada498e98fb84066&language=${language}&page=${page}`);
  };
  
}

