import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { SeriesService } from '../../series.service'
import { ActivatedRoute } from '@angular/router'
import Vibrant from 'node-vibrant'
import { Palette } from 'node-vibrant/lib/color'
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-series-info',
  templateUrl: './series-info.component.html',
  styleUrls: ['./series-info.component.scss']
})
export class SeriesInfoComponent implements OnInit {
  
  private background: string;
  private id: string;
  private serieInfo: any;
  private language: string = "en-US"
  private transparencia: string = "d4"
  private palette: Palette;
  private obj: any;
  private url:SafeResourceUrl;

  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.seriesService.getInfoSerie(this.id, this.language).subscribe(value => {

      this.serieInfo = value;
      console.log(this.serieInfo)
      let img = `https://image.tmdb.org/t/p/w500/${this.serieInfo.backdrop_path}`
      Vibrant.from(img).getPalette((err, palette) => {
        if(err)console.log(err)
        console.log(palette)
        this.palette = palette;
      });

      this.seriesService.getTrailerSeries(this.id,this.language).subscribe(
        res=>{
          this.url=this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+res.results[1].key)
        }
      )




      // this.seriesService.getTrailerSerie(this.id,this.language).subscribe(res=>{
      //   this.trailer+=res.results[1].key;
      //   console.log(this.trailer)
      //   const iframe= document.getElementById("iframeVideo");
      //   iframe.setAttribute("src", this.trailer);
      // })
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
