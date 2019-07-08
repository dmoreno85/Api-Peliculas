import { Component, OnInit, DoCheck } from '@angular/core';
import { SeriesService } from '../../series.service';

import { ActivatedRoute } from '@angular/router'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-series-results',
  templateUrl: './series-results.component.html',
  styleUrls: ['./series-results.component.scss']
})
export class SeriesResultsComponent implements OnInit, DoCheck {

  private pageTitle: string;

  private genreSelected: number = 0;
  private orderBy: string;
  private resultType: any;
  private series: Object[];
  private page: number = 1;
  private totalPages: number;
  private languaje: string = "en-US";

  private genres: any = [{ "id": 0, "name": "Todas" }];

  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getGenres();
    this.route.params.subscribe(value => {
      this.resultType = value.type

      this.seriesService.getTodasSeries(this.page, this.languaje, this.resultType).subscribe(value => {
        console.log(value);
        this.page = value.page;
        this.totalPages = value.total_pages;
        this.series = value.results;

        switch (this.resultType) {
          case "all":
            return this.pageTitle = 'Todas las series';
          case "populares":
            return this.pageTitle = 'Series populares';
          case "mejor-puntuadas":
            return this.pageTitle = 'Series mejor puntuadas';
          default:
            return this.pageTitle = 'Series';
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
      this.getTv(this.page);
      console.log(this.page);
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.getTv(this.page);
      console.log(this.page);
    }
  }

  getTv(page: number) {
    if (this.genreSelected === 0) {
      this.seriesService.getTodasSeries(page, this.languaje, this.resultType).subscribe(value => {
        this.series = value.results;
        this.totalPages = value.total_pages;
      }, error => console.log('No se han podido recuperar los datos'))
    } else {
      this.seriesService.getSerieByGenre(this.genreSelected, page).subscribe(value => {
        this.series = value.results;
        this.totalPages = value.total_pages;
      }, error => console.log(error))
    }
  }

  byName(order: string) {
    this.orderBy = order;
    if (this.series) {
      if (order === 'nameAscendant') {
        this.series.sort(function (a, b) {
          if (a['title'] > b['title']) {
            return 1;
          }
          if (a['title'] < b['title']) {
            return -1;
          }
          return 0;
        });
      } else {
        this.series.sort(function (a, b) {
          if (a['name'] < b['name']) {
            return 1;
          }
          if (a['name'] > b['name']) {
            return -1;
          }
          return 0;
        })
      }
    }
  }

  byTime(order: string) {
    this.orderBy = order;
    console.log(this.orderBy);
    if (this.series) {
      if (order === 'dateAscendant') {
        this.series.sort((a: Object, b: Object) => {
          if (a['release_date'] < b['release_date']) {
            return 1;
          }
          if (a['release_date'] > b['release_date']) {
            return -1;
          }
          return 0;
        });
      } else {
        this.series.sort((a: Object, b: Object) => {
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
    if (this.series) {
      if (this.orderBy === 'popularityAscendant') {

        this.series.sort(function (a, b) {
          if (a['popularity'] < b['popularity']) {
            return 1;
          }
          if (a['popularity'] > b['popularity']) {
            return -1;
          }
          return 0;
        });
      } else {
        this.series.sort(function (a, b) {
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
    this.seriesService.getAllGenres().subscribe(value => {
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
    this.getTv(this.page);
  }
}
