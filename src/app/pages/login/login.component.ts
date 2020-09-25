import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { AuthFireService } from 'src/app/service/auth-fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public atf: AuthFireService) { }

  ngOnInit(): void {
  }

  onLogin(email: string, pass: string) {

    this.atf.login(email, pass)
      .then(s => {
        if (!s) {
          alert("Correo o contraseña incorrectas")
        }
      });

  }

}
