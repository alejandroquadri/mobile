import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

//servicios
import { AuthData } from './auth-data';


@Injectable()
export class ProfileData {

  currentProfile: any;
  public profileObs: Observable<any>;

  constructor(
    public af: AngularFire,
    public authData: AuthData
  ) {
    console.log('current user para profile-date', this.authData.current.uid);
    this.profileObs = af.database.object(`/userProfile/${this.authData.current.uid}`);

  }

  updateProfile(form){
    console.log('update profile en service', form);
    this.af.database.object(`/userProfile/${this.authData.current.uid}`)
    .update(form)
  }

}
