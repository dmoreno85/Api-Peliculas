import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../peliculas.service';

@Component({
  selector: 'app-content-principal',
  templateUrl: './content-principal.component.html',
  styleUrls: ['./content-principal.component.scss']
})
export class ContentPrincipalComponent implements OnInit {
  private peliculas:Object[]
  constructor(private peliculasService: PeliculasService) { }//aquí inyecto el servicio PeliculasService al componente upcoming-movies)

  ngOnInit() {
    this.peliculasService.getEstrenosPeliculas().subscribe(res => this.peliculas=res.results, error=>console.log(error))
  }
}
