import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../peliculas.service';
import {ActivatedRoute} from '@angular/router';
import Vibrant from 'node-vibrant';
import { Palette } from 'node-vibrant/lib/color';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-peli-info',
  templateUrl: './peli-info.component.html',
  styleUrls: ['./peli-info.component.scss']
})
export class PeliInfoComponent implements OnInit {
  private peliInfo: any;
  private palette: Palette;
  private transparencia: string = "d4"
  private id: string;

  private background: string;
  
  private language: string = "en-US"

  private obj: any;
  private url:SafeResourceUrl;

  constructor(
    private peliculasService: PeliculasService,
    private route:ActivatedRoute,
    private sanitizer: DomSanitizer

    ) { }

  ngOnInit() {
   
    this.id = this.route.snapshot.paramMap.get("id");
    this.peliculasService.getPeliInfo(this.id, this.language).subscribe(value => {

      this.peliInfo = value;
      console.log(this.peliInfo)
      let img = `https://image.tmdb.org/t/p/w500/${this.peliInfo.backdrop_path}`
      Vibrant.from(img).getPalette((err, palette) => {
        if(err)console.log(err)
        console.log(palette)
        this.palette = palette;
      });

      this.peliculasService.getTrailersPelis(this.id,this.language).subscribe(
        res=>{
          this.url=this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+res.results[1].key)
        }
      )
    }, error => console.log(error))
  }
  styleContainer(): any {
    console.log('palette', this.palette);
    if (this.palette.LightVibrant) {

      return {
        'background-image': `linear-gradient(${this.palette.LightVibrant.getHex()}${this.transparencia},${this.palette.LightVibrant.getHex()}${this.transparencia}), url('https://image.tmdb.org/t/p/w780${this.peliInfo.backdrop_path}')`
      }
    } else {

      return {
        'background-image': `linear-gradient(${this.palette.LightMuted.getHex()}${this.transparencia},${this.palette.LightMuted.getHex()}${this.transparencia}), url('https://image.tmdb.org/t/p/w780${this.peliInfo.backdrop_path}')`
      };
    }
  }
}
