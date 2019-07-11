import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/series.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public resultadoBusqueda: any;
  private page: any = 1;
  private totalPages: any;
  private searchInput: string;

  // private genreSelected: number = 0;
  // private orderBy: string;
  
  // private peliculas: Object[]


  // private genres: any = [{ "id": 0, "name": "Todas" }];

  constructor(
    private seriesService: SeriesService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (!this.seriesService.searchInput) {
      this.router.navigate(['/'])
    }
    this.searchInput = this.seriesService.searchInput;
    this.totalPages = this.seriesService.searchResults.total_pages;
    this.resultadoBusqueda = this.seriesService.searchResults.results;
    console.log(this.resultadoBusqueda)
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.seriesService.getSearch(this.page, this.searchInput).subscribe(value => {
        this.resultadoBusqueda = value.results;
        this.totalPages = value.total_pages;
      }, error => console.log('No se han podido recuperar los datos'))
      console.log(this.page);
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.seriesService.getSearch(this.page, this.searchInput).subscribe(value => {
        this.resultadoBusqueda = value.results;
        this.totalPages = value.total_pages;
      }, error => console.log('No se han podido recuperar los datos'))
      console.log(this.page);
    }
  }

  // byName(order: string) {
  //   this.orderBy = order;
  //   if (this.peliculas) {
  //     if (order === 'nameAscendant') {
  //       this.peliculas.sort(function (a, b) {
  //         if (a['title'] > b['title']) {
  //           return 1;
  //         }
  //         if (a['title'] < b['title']) {
  //           return -1;
  //         }
  //         return 0;
  //       });
  //     } else {
  //       this.peliculas.sort(function (a, b) {
  //         if (a['title'] < b['title']) {
  //           return 1;
  //         }
  //         if (a['title'] > b['title']) {
  //           return -1;
  //         }
  //         return 0;
  //       });
  //     }
  //   }
  // }

  // byTime(order: string) {
  //   this.orderBy = order;
  //   console.log(this.orderBy);
  //   if (this.peliculas) {
  //     if (order === 'dateAscendant') {
  //       this.peliculas.sort((a: Object, b: Object) => {
  //         if (a['release_date'] < b['release_date']) {
  //           return 1;
  //         }
  //         if (a['release_date'] > b['release_date']) {
  //           return -1;
  //         }
  //         return 0;
  //       });
  //     } else {
  //       this.peliculas.sort((a: Object, b: Object) => {
  //         if (a['release_date'] > b['release_date']) {
  //           return 1;
  //         }
  //         if (a['release_date'] < b['release_date']) {
  //           return -1;
  //         }
  //         return 0;
  //       });
  //     }
  //   }
  // }

  // byPopulation(order: string) {
  //   this.orderBy = order;
  //   console.log(this.orderBy);
  //   if (this.peliculas) {
  //     if (this.orderBy === 'popularityAscendant') {

  //       this.peliculas.sort(function (a, b) {
  //         if (a['popularity'] < b['popularity']) {
  //           return 1;
  //         }
  //         if (a['popularity'] > b['popularity']) {
  //           return -1;
  //         }
  //         return 0;
  //       });
  //     } else {
  //       this.peliculas.sort(function (a, b) {
  //         if (a['popularity'] > b['popularity']) {
  //           return 1;
  //         }
  //         if (a['popularity'] < b['popularity']) {
  //           return -1;
  //         }
  //         return 0;
  //       });
  //     }
  //   }
  // }

  // getGenres() {
  //   this.peliculasService.getAllGenres().subscribe(value => {
  //     this.genres = [
  //       ...this.genres,
  //       ...value['genres']
  //     ];
  //     console.log(this.genres);
  //   }, error => console.log(error));
  // }

  // byGenre(id: string) {
  //   console.log(id);
  //   this.genreSelected = +id;
  //   console.log(this.genreSelected);
  //   this.page = 1;
  //   this.getMovie(this.page);
  // }


}
