import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/service/pelicula.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  constructor(public _serverApi:PeliculaService ) { }

  ngOnInit(): void {
  }

}
