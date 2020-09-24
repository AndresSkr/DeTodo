import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { peliculas } from '../interfaces/peliculas.interfaces';


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  lstPeliculas: peliculas[] = [];
  moviesApi: any= [];

  constructor(private http: HttpClient) {
    this.ListMovies();
    this.Apimovies();
  }

  private ListMovies() {

    return new Promise((resolve, rejects) => {
      this.http.get('https://angular-cine-d9080.firebaseio.com/Pelicula.json').subscribe(
        (list: peliculas[]) => {
          this.lstPeliculas = list;
          resolve();
        });
    })
  }

  private Apimovies() {
    const KEY_API = '31999ea21a3c64ed9589014af8a7a9c7'
    const BASE_URL = 'https://api.themoviedb.org/3/'
    const url = `${BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${KEY_API}`;

    return new Promise( (resolve, rejects) =>{
      this.http.get(url).subscribe(
        (res:any)=>{
          this.moviesApi= res['results'];
          console.log(res['results']);
          resolve();
        }
      ); 

    })

    

    

  }
}
