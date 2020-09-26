import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { auth } from 'firebase';
import { AuthFireService } from 'src/app/service/auth-fire.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  RegisterForm:FormGroup;
  constructor( public aut:AuthFireService,public fm:FormBuilder
    ) { }

  ngOnInit(): void {

    this.RegisterForm=this.fm.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })

  }

  registrar(){
    const { email,password} = this.RegisterForm.value;
   
     this.aut.register(email,password).then(s=>{
      if(s){
        alert("registro exitoso");
        this.RegisterForm.reset();
      }
    }) 


  }

}
