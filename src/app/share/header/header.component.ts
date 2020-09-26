import { Component, OnInit } from '@angular/core';
import { AuthFireService } from 'src/app/service/auth-fire.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isSignIn = false;
  constructor(public atf: AuthFireService) {

   if (localStorage.getItem('user') != null) {
      this.isSignIn = true
    }
    else {
      this.isSignIn = false
    } 
  }
  
  ngOnInit(): void {

  }
  logout() {
    this.atf.logOut();
    this.isSignIn = false;
    console.log("ya no te encuentras logueado");
  }
}
