import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { FooterComponent } from './share/footer/footer.component';
import { HeaderComponent } from './share/header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistroComponent } from './pages/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    PeliculaComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyCdyf6_hIjM4OkRWgV-FpdhCl19mwozXcI",
        authDomain: "angular-cine-d9080.firebaseapp.com",
        databaseURL: "https://angular-cine-d9080.firebaseio.com",
        projectId: "angular-cine-d9080",
        storageBucket: "angular-cine-d9080.appspot.com",
        messagingSenderId: "263021406171",
        appId: "1:263021406171:web:80db296f6f9c2b9b5f69fe",
        measurementId: "G-Z26XMB0M8L"
      }
    ),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
