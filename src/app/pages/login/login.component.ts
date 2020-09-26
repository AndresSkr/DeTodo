import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFireService } from 'src/app/service/auth-fire.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginFrom:FormGroup;
  constructor(public atf: AuthFireService,
    public fb:FormBuilder ) { }

  ngOnInit(): void {


    this.LoginFrom=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }

  onLogin() {

    var {email , password}=this.LoginFrom.value
    this.atf.login(email, password)
      .then(s => {
        if (!s) {
          alert("Correo o contraseña incorrectas")
        }
      });
  }
}
