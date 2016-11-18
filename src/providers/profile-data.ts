import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

//servicios
import { AuthData } from './auth-data';


@Injectable()
export class ProfileData {

  profile: FirebaseObjectObservable<any>;
  currentUser: any;

  constructor(
    public af: AngularFire,
    public authData: AuthData
  ) {}

  updateProfile(form){
    return this.af.database.object(`/userProfile/${this.currentUser.uid}`).update(form)
    .then(() => {
      console.log('actualizado provider');
    })
  }

  getProfile(){
    this.currentUser = this.authData.currentUser();
    return this.af.database.object(`/userProfile/${this.currentUser.uid}`, { preserveSnapshot: true })
  }

}
