import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { PeliculasService } from '../../peliculas.service';

@Component({
  selector: 'app-films-results',
  templateUrl: './films-results.component.html',
  styleUrls: ['./films-results.component.scss']
})
export class FilmsResultsComponent implements OnInit {

  private peliculasPopulares: Object[]
  private page: Number = 1;
  private totalPages: Number;
  private languaje: String = "en-US";

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.peliculasService.getTodasPeliculas(this.page, this.languaje).subscribe(value => {
      console.log(value);
      this.page = value.page;
      this.totalPages = value.total_pages;
      this.peliculasPopulares = value.results;
    }, error => console.log(error));
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.peliculasService.getTodasPeliculas(this.page, this.languaje).subscribe(value => {
        this.peliculasPopulares = value.results;
      }, error => console.log('No se han podido recuperar los datos'))
      console.log(this.page);
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.peliculasService.getTodasPeliculas(this.page, this.languaje).subscribe(value => {
        this.peliculasPopulares = value.results;
      }, error => console.log('No se han podido recuperar los datos'));
      console.log(this.page);
    }
  }

}
