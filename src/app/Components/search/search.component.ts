import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../series.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public busqueda: string;
  constructor(
    private seriesService: SeriesService,
    private router: Router,
  ) { }

  ngOnInit() {
 
  }

  handleSubmit() {
    this.seriesService.searchInput=this.busqueda;
    this.seriesService.getSearch(1,this.busqueda).subscribe(res => {
      this.seriesService.searchResults=res;
      this.router.navigate(['/results'])
    })
    return true;
    // this.userService.register(this.form.value).subscribe(res=>console.log(res))
  }
}
