import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { LoginComponent } from './pages/login/login.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { RegistroComponent } from './pages/registro/registro.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'registro', component: RegistroComponent},
  {path:'inicio', component: InicioComponent},
  {path:'listado', component: ListadoComponent},
  {path:'pelicula', component: PeliculaComponent},
  {path:'**', pathMatch:'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
