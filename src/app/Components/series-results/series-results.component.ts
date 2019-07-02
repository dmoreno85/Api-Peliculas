import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../series.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-series-results',
  templateUrl: './series-results.component.html',
  styleUrls: ['./series-results.component.scss']
})
export class SeriesResultsComponent implements OnInit {

  private resultType: any
  private seriesPopulares: Object[]
  private page: number = 1;
  private totalPages: number;
  private languaje: string = "en-US";

  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.resultType = value.type
      // console.log(this.resultType)
      this.seriesService.getTodasSeries(this.page, this.languaje, this.resultType).subscribe(value => {
        console.log(value);
        this.page = value.page;
        this.totalPages = value.total_pages;
        this.seriesPopulares = value.results;
      }, error => console.log(error));

    }, error => console.log(error))


  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.seriesService.getTodasSeries(this.page, this.languaje, this.resultType).subscribe(value => {
        this.seriesPopulares = value.results;
      }, error => console.log('No se han podido recuperar los datos'))
      console.log(this.page);
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.seriesService.getTodasSeries(this.page, this.languaje, this.resultType).subscribe(value => {
        this.seriesPopulares = value.results;
      }, error => console.log('No se han podido recuperar los datos'));
      console.log(this.page);
    }
  }

}
