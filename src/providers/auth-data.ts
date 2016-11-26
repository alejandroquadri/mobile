import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
// import firebase from 'firebase';

@Injectable()
export class AuthData {
  public current: any;
  public userProfile: any;

  constructor( public af: AngularFire ) {}

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
      firebase.database().ref('/userProfile').child(newUser.uid)
      .set({email:newEmail, coach: false});
    })
  }

  setCurrent(user){
    return this.current = user;
  }

}
