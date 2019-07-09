import { Component, OnInit } from '@angular/core';
import { PeliculasService} from  '../../peliculas.service';

@Component({
  selector: 'app-content-secundario',
  templateUrl: './content-secundario.component.html',
  styleUrls: ['./content-secundario.component.scss']
})


export class ContentSecundarioComponent implements OnInit {
  private peliculas:object[];
  private id: string;
  year:number;
    constructor(
      private peliculasService: PeliculasService
             ) { }//aquí inyecto el servicio PeliculasService al componente upcoming-movies)
ngDoCheck(){
}
  ngOnInit() {
    }
  filtrarPorMejores(year:number):void{
    this.peliculasService.getPeliculasByYear(year).subscribe(res => this.peliculas=res.results.splice(0,5), error=>console.log(error))
  }
  

  filtrarPorMejoresIntervalo(desde:number,hasta:number):void{
    console.log(this.year)
    this.peliculasService.getPeliculasByYearI(this.year,this.year).subscribe(res => this.peliculas=res.results.splice(0,5), error=>console.log(error))
  }
  
  
}
