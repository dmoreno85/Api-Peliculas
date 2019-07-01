import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../peliculas.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-films-results',
  templateUrl: './films-results.component.html',
  styleUrls: ['./films-results.component.scss']
})
export class FilmsResultsComponent implements OnInit {

  private resultType: any;
  private peliculasPopulares: Object[]
  private page: number = 1;
  private totalPages: number;
  private languaje: string = "en-US";

  constructor(
    private peliculasService: PeliculasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.resultType = this.route.snapshot.paramMap.get('type');

    this.peliculasService.getTodasPeliculas(this.page, this.languaje, this.resultType).subscribe(value => {
      console.log(value);
      this.page = value.page;
      this.totalPages = value.total_pages;
      this.peliculasPopulares = value.results;
    }, error => console.log(error));
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.peliculasService.getTodasPeliculas(this.page, this.languaje, this.resultType).subscribe(value => {
        this.peliculasPopulares = value.results;
      }, error => console.log('No se han podido recuperar los datos'))
      console.log(this.page);
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.peliculasService.getTodasPeliculas(this.page, this.languaje, this.resultType).subscribe(value => {
        this.peliculasPopulares = value.results;
      }, error => console.log('No se han podido recuperar los datos'));
      console.log(this.page);
    }
  }

}
