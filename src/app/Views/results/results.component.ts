import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/series.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  private resultadoBusqueda: any;
  private page: any = 1;
  private totalPages: any;
  private searchInput: string;
  constructor(
    private seriesService: SeriesService,
  ) { }

  ngOnInit() {
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

}
