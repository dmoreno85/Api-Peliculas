import { Component, OnInit, OnChanges } from '@angular/core';
import { PeliculasService} from  '../../peliculas.service';

@Component({
  selector: 'app-content-secundario',
  templateUrl: './content-secundario.component.html',
  styleUrls: ['./content-secundario.component.scss']
})


export class ContentSecundarioComponent implements OnInit {
<<<<<<< HEAD
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
=======
  ngOnInit(): void {
    
  }
  private peliculas:Object[]
  private series:Object[]
  year:number;
    constructor(private peliculasService: PeliculasService , private SeriesService:SeriesService) { }//aquí inyecto el servicio PeliculasService al componente upcoming-movies)
    principalLoaded:boolean=false;

>>>>>>> 5285e2fcea2ef969d5ec90ca0e249e915e10071b
  filtrarPorMejores(year:number):void{
    this.peliculasService.getPeliculasByYear(year).subscribe(res => this.peliculas=res.results.splice(0,5), error=>console.log(error))
  }
  

  filtrarPorMejoresIntervalo(desde:number,hasta:number):void{
    console.log(this.year)
    this.peliculasService.getPeliculasByYearI(this.year,this.year).subscribe(res => this.peliculas=res.results.splice(0,5), error=>console.log(error))
  }
<<<<<<< HEAD
  
  
=======
  ngDoCheck(){
    this.principalLoaded=this.peliculasService.principalLoaded;
  }
  ngOnDestroy(){
    this.peliculasService.principalLoaded=false;
  }
>>>>>>> 5285e2fcea2ef969d5ec90ca0e249e915e10071b
}
