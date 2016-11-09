import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';
// hay cosas que voy a usar directamente con el JS SDK
// dessde AF@ beta6 no es necesario importar el JS SDK para usarlo
// con AngularFire basta

@Injectable()
export class AuthData {
  fireAuth: any;

  constructor( public af: AngularFire ) {
    af.auth.subscribe( user => {
      if (user) {
        this.fireAuth = user.auth;
        console.log(user);
      }
    });
  }

  loginUser(newEmail: string, newPassword: string): any {
    return this.af.auth.login({ email: newEmail, password: newPassword });
  }

  // para esto uso el JS SDK, no esta disponible todavia en AF2
  resetPassword(email: string): any {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): any {
    return this.af.auth.logout();
  }

  signupUser(newEmail: string, newPassword: string): any {
    return this.af.auth.createUser({ email: newEmail, password: newPassword });
  }

}
