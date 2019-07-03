import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../peliculas.service';
import { ActivatedRoute } from '@angular/router';
import Vibrant from 'node-vibrant'
import { Palette } from 'node-vibrant/lib/color'

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

  constructor(private peliculasService: PeliculasService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {    //me suscribo a los parámetros de la ruta, en este caso el ID

      this.peliculasService.getPeliInfo(params.id).subscribe(res => {//llamo al servicio pasándole la id de la ruta

        this.peliInfo = res
        console.log(this.peliInfo)
        let img = `https://image.tmdb.org/t/p/w780/${this.peliInfo.backdrop_path}`
        Vibrant.from(img).getPalette((err, palette) => {
          console.log(palette)
          console.log(err)
          this.palette = palette;
        });

      })
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
