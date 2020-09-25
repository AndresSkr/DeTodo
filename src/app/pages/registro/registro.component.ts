import { Component, OnInit } from '@angular/core';
import { AuthFireService } from 'src/app/service/auth-fire.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor( public aut:AuthFireService) { }

  ngOnInit(): void {
  }

  registrar(email:string,pass:string){
   
    this.aut.register(email,pass).then(s=>{
      if(s){
        alert("registro exitoso");
      }
    })

  }

}
