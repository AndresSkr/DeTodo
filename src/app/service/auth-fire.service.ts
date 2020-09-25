import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { User } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthFireService {
  public user: User = null;
  constructor(public afAuth: AngularFireAuth) {

  }
  async login(email: string, pass: string) {
    try {
      const resultado = await this.afAuth.signInWithEmailAndPassword(email, pass).
        then(userCreden => {
          this.user = userCreden['user'];
        });

      if (this.user) {
        localStorage.setItem('user',JSON.stringify(this.user));
        window.location.replace('');
       return true;
      }

    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async register(email: string, pass: string) {
    try {
      const user = await this.afAuth.createUserWithEmailAndPassword(email, pass);
      window.location.replace('#/login');
      return true;
    } catch (error) {
      alert(error['message']);
      return false;
    }
  }

  async logOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.user=null;
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
