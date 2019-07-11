import { Component, OnInit, OnChanges } from '@angular/core';
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
  desde: number;
  hasta: number;
    constructor(
      private peliculasService: PeliculasService
             ) { }//aquí inyecto el servicio PeliculasService al componente upcoming-movies)
ngDoCheck(){
}
  ngOnInit() {
    }
  filtrarPorMejores(year:number):void{
    this.peliculasService.getPeliculasByYear(year).subscribe(res => this.peliculas=res.results.splice(200,6), error=>console.log(error))
  }
  

  filtrarPorMejoresIntervalo(desde:number,hasta:number):void{
     this.peliculasService.getPeliculasByYearI(desde,hasta).subscribe(res => this.peliculas=res.results.splice(10,6), error=>console.log(error))
  }
  
  
}
