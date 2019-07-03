import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../series.service'
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-series-info',
  templateUrl: './series-info.component.html',
  styleUrls: ['./series-info.component.scss']
})
export class SeriesInfoComponent implements OnInit {
  private background:string;
  private id: string;
  private serieInfo: any;
  private language: string = "es-ES"
  private obj:any;
  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.seriesService.getInfoSerie(this.id, this.language).subscribe(value => {
      this.serieInfo=value;
      console.log(this.serieInfo)
  
     
      this.obj ={'background-image':`linear-gradient(#f1c40fa5, #f1c40fd4), url('https://image.tmdb.org/t/p/w780${this.serieInfo.backdrop_path}')`}
    },error=>console.log(error))
  }

}
