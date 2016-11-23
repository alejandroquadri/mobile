import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthData {
  public fireAuth: any;
  public userProfile: any;

  constructor( public af: AngularFire ) {
    this.userProfile = firebase.database().ref('/userProfile');
    af.auth.subscribe( user => {
      if (user) {
        this.fireAuth = user.auth;
        console.log('current user', user);
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
    return this.af.auth.createUser({ email: newEmail, password: newPassword })
    .then(newUser => {
      this.userProfile.child(newUser.uid).set({email:newEmail});
    })
  }

  currentUser():any {
    return this.fireAuth;
  }

  updateAuthProfile(form){
    return firebase.auth().currentUser.updateProfile(form)
    .then((user) => {
      console.log('usuario actualizado', user);
    })
  }

}
