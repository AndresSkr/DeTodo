import { Component, OnInit } from '@angular/core';
import { peliculas } from 'src/app/interfaces/peliculas.interfaces';
import { PeliculaService } from 'src/app/service/pelicula.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  lstPeliculas: peliculas[] = [];

  constructor(public _servicioPelicula: PeliculaService) {
  }

  ngOnInit(): void {
  }

}
