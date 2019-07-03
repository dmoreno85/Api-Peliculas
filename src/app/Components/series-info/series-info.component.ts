import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../series.service'
import { ActivatedRoute } from '@angular/router'
import Vibrant from 'node-vibrant'
import { Palette } from 'node-vibrant/lib/color'



@Component({
  selector: 'app-series-info',
  templateUrl: './series-info.component.html',
  styleUrls: ['./series-info.component.scss']
})
export class SeriesInfoComponent implements OnInit {
  private id: string;
  private serieInfo: any;
  private language: string = "es-ES"
  private transparencia: string = "d4"
  private palette: Palette;
  private obj: any;
  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.seriesService.getInfoSerie(this.id, this.language).subscribe(value => {
      this.serieInfo = value;
      console.log(this.serieInfo)
      let img = `https://image.tmdb.org/t/p/w780/${this.serieInfo.backdrop_path}`
      Vibrant.from(img).getPalette((err, palette) => {
        console.log(palette)
        console.log(err)
        this.palette = palette;
      });

    }, error => console.log(error))


  }

  styleContainer(): any {
    console.log('palette', this.palette);
    if (this.palette.LightVibrant) {


      return {
        'background-image': `linear-gradient(${this.palette.LightVibrant.getHex()}${this.transparencia},${this.palette.LightVibrant.getHex()}${this.transparencia}), url('https://image.tmdb.org/t/p/w780${this.serieInfo.backdrop_path}')`
      }
    } else {

      return {
        'background-image': `linear-gradient(${this.palette.LightMuted.getHex()}${this.transparencia},${this.palette.LightMuted.getHex()}${this.transparencia}), url('https://image.tmdb.org/t/p/w780${this.serieInfo.backdrop_path}')`
      };
    }

  }

}
