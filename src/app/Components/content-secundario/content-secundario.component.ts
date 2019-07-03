import { Component, OnInit, OnChanges } from '@angular/core';
import { PeliculasService} from  '../../peliculas.service';
@Component({
  selector: 'app-content-secundario',
  templateUrl: './content-secundario.component.html',
  styleUrls: ['./content-secundario.component.scss']
})

export class ContentSecundarioComponent implements OnInit {
  ngOnInit(): void {
    
  }
  private peliculas:Object[]
  year:number;
  constructor(private peliculasService: PeliculasService) { }//aquí inyecto el servicio PeliculasService al componente upcoming-movies)
  principalLoaded:boolean=false;
  filtrarPorMejores(year:number):void{
    console.log(year)
    this.peliculasService.getPeliculasByYear(year).subscribe(res => this.peliculas=res.results.splice(0,5), error=>console.log(error))
  }
  filtrarPorMejoresIntervalo(desde:number,hasta:number):void{
    console.log(this.year)
    this.peliculasService.getPeliculasByYear(this.year).subscribe(res => this.peliculas=res.results.splice(0,5), error=>console.log(error))
 
  }
  ngDoCheck(){
    this.principalLoaded=this.peliculasService.principalLoaded;
  }
  ngOnDestroy(){
    this.peliculasService.principalLoaded=false;
  }
}
