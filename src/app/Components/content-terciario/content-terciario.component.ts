import { Component, OnInit } from '@angular/core';
import { SeriesService} from  '../../series.service';
@Component({
  selector: 'app-content-terciario',
  templateUrl: './content-terciario.component.html',
  styleUrls: ['./content-terciario.component.scss']
})
export class ContentTerciarioComponent implements OnInit {
  private serieInfo:object[];
  year: number;
  constructor(
    private seriesService: SeriesService,
  
  ) {}
        ngDoCheck(){
        }
        ngOnInit() {
  }
  filtrarPorMejoresSeries(year:number):void{
    console.log(year)
    this.seriesService.getSeriesByYear(year).subscribe(res => this.serieInfo=res.results.splice(0,5), error=>console.log(error))
  }
  // filtrarPorMejoresIntervaloSeries(desde:'number',hasta:'number'):void{
  //   console.log(this.year)
  //   this.seriesService.getSeriesByYear2(this.year).subscribe(res => this.serieIn=res.results.splice(0,5), error=>console.log(error))
  // }
}
