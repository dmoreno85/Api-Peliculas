import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../peliculas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-peli-info',
  templateUrl: './peli-info.component.html',
  styleUrls: ['./peli-info.component.scss']
})
export class PeliInfoComponent implements OnInit {
  private peliInfo:Object[]
  constructor(private peliculasService: PeliculasService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{ //me suscribo a los parámetros de la ruta, en este caso el ID

      this.peliculasService.getPeliInfo(params.id) //llamo al servicio pasándole la id de la ruta
      .subscribe(res=>this.peliInfo=res)
    })

  }

}
