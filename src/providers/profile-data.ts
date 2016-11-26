import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

//servicios
import { AuthData } from './auth-data';


@Injectable()
export class ProfileData {

  currentProfile: any;

  constructor(
    public af: AngularFire,
    public authData: AuthData
  ) {}

  updateProfile(form){
    this.af.database.object(`/userProfile/${this.authData.current.uid}`)
    .update(form)
  }

  getProfile():any {
    this.currentProfile = this.af.database.object(`/userProfile/${this.authData.current.uid}`, { preserveSnapshot: true })
    .subscribe(snapshot => {
      console.log('getProfile', snapshot)
      console.log('getProfile con val', snapshot.val())
      this.currentProfile = snapshot.val();
      console.log('currentProfile', this.currentProfile)
    });
  }

}
