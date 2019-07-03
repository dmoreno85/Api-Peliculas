import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { PeliculasService } from '../../peliculas.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-films-results',
  templateUrl: './films-results.component.html',
  styleUrls: ['./films-results.component.scss']
})
export class FilmsResultsComponent implements OnInit, DoCheck {

  private pageTitle: string;

  private genreSelected: number = 0;
  private orderBy: string;
  private resultType: any;
  private peliculas: Object[]
  private page: number = 1;
  private totalPages: number;
  private languaje: string = "en-US";

  private genres: any = [{ "id": 0, "name": "Todas" }];

  constructor(
    private peliculasService: PeliculasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getGenres();
    this.route.params.subscribe(value => {
      this.resultType = value.type;

      this.peliculasService.getTodasPeliculas(this.page, this.languaje, this.resultType).subscribe(value => {
        console.log(value);
        this.page = value.page;
        this.totalPages = value.total_pages;
        this.peliculas = value.results;

        switch (this.resultType) {
          case "all":
            return this.pageTitle = 'Todas las películas';
          case "populares":
            return this.pageTitle = 'Películas populares';
          case "novedades":
            return this.pageTitle = 'Películas de estreno';
          case "mejor-puntuadas":
            return this.pageTitle = 'Películas mejor puntuadas';
          default:
            return this.pageTitle = 'Películas';
        }
      }, error => console.log(error));
    }, error => console.log(error));
  }

  ngDoCheck() {
    switch (this.orderBy) {
      case "nameAscendant":
      case "nameDescendant":
        this.byName(this.orderBy);
        break;
      case "dateAscendant":
      case "dateDescendant":
        this.byTime(this.orderBy);
        break;
      case "popularityAscendant":
      case "popularityDescendant":
        this.byPopulation(this.orderBy);
        break;
    }
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.getMovie(this.page);
      console.log(this.page);
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.getMovie(this.page);
      console.log(this.page);
    }
  }

  getMovie(page: number) {
    if (this.genreSelected === 0) {
      this.peliculasService.getTodasPeliculas(page, this.languaje, this.resultType).subscribe(value => {
        this.peliculas = value.results;
        this.totalPages = value.total_pages;
      }, error => console.log('No se han podido recuperar los datos'))
    } else {
      this.peliculasService.getPeliByGenre(this.genreSelected, page).subscribe(value => {
        this.peliculas = value.results;
        this.totalPages = value.total_pages;
      }, error => console.log(error));
    }
  }

  byName(order: string) {
    this.orderBy = order;
    if (this.peliculas) {
      if (order === 'nameAscendant') {
        this.peliculas.sort(function (a, b) {
          if (a['title'] > b['title']) {
            return 1;
          }
          if (a['title'] < b['title']) {
            return -1;
          }
          return 0;
        });
      } else {
        this.peliculas.sort(function (a, b) {
          if (a['title'] < b['title']) {
            return 1;
          }
          if (a['title'] > b['title']) {
            return -1;
          }
          return 0;
        });
      }
    }
  }

  byTime(order: string) {
    this.orderBy = order;
    console.log(this.orderBy);
    if (this.peliculas) {
      if (order === 'dateAscendant') {
        this.peliculas.sort((a: Object, b: Object) => {
          if (a['release_date'] < b['release_date']) {
            return 1;
          }
          if (a['release_date'] > b['release_date']) {
            return -1;
          }
          return 0;
        });
      } else {
        this.peliculas.sort((a: Object, b: Object) => {
          if (a['release_date'] > b['release_date']) {
            return 1;
          }
          if (a['release_date'] < b['release_date']) {
            return -1;
          }
          return 0;
        });
      }
    }
  }

  byPopulation(order: string) {
    this.orderBy = order;
    console.log(this.orderBy);
    if (this.peliculas) {
      if (this.orderBy === 'popularityAscendant') {

        this.peliculas.sort(function (a, b) {
          if (a['popularity'] < b['popularity']) {
            return 1;
          }
          if (a['popularity'] > b['popularity']) {
            return -1;
          }
          return 0;
        });
      } else {
        this.peliculas.sort(function (a, b) {
          if (a['popularity'] > b['popularity']) {
            return 1;
          }
          if (a['popularity'] < b['popularity']) {
            return -1;
          }
          return 0;
        });
      }
    }
  }

  getGenres() {
    let allGenres = this.peliculasService.getAllGenres().subscribe(value => {
      this.genres = [
        ...this.genres,
        ...value['genres']
      ];
      console.log(this.genres);
    }, error => console.log(error));
  }

  byGenre(id: string) {
    console.log(id);
    this.genreSelected = +id;
    console.log(this.genreSelected);
    this.page = 1;
    this.getMovie(this.page);
  }

}