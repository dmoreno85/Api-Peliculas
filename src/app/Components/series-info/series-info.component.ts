import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../series.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-series-info',
  templateUrl: './series-info.component.html',
  styleUrls: ['./series-info.component.scss']
})
export class SeriesInfoComponent implements OnInit {

  private id: string;
  private serieInfo: Object;
  private language: string = "es-ES"

  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.seriesService.getInfoSerie(this.id, this.language).subscribe(value => {
      this.serieInfo=value;
      console.log(this.serieInfo)
    },error=>console.log(error))
  }

}
