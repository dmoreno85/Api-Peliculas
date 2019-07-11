import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { SeriesService } from '../../series.service';
@Component({
  selector: 'app-content-terciario',
  templateUrl: './content-terciario.component.html',
  styleUrls: ['./content-terciario.component.scss']
})
export class ContentTerciarioComponent implements OnInit {
  public serieInfo: object[];
  year: number;

  //this.seriesService.getSeriesByYear(year).subscribe(res => this.serieInfo = res.results.splice(0, 5), error => console.log(error))
  constructor(
    private seriesService: SeriesService,

  ) { }
  ngOnInit(): void {

  }

  filtrarPorMejoresSeries(year: number): void {
    this.seriesService.getSeriesByYear(year).subscribe(res => this.serieInfo = res.results.splice(0, 5), error => console.log(error))
  }
}
