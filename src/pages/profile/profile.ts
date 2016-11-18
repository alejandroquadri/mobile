import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

// servicios
import { AuthData } from '../../providers/auth-data';
import { ProfileData } from '../../providers/profile-data';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public profileForm: any = {
    firstName: '',
    lastName: '',
    bio: '',
    alias: '',
    birthDate: '',
  }
  public profileAF: any;
  public avatar: string = "../../assets/images/smiley-cyrus.jpg";
  public profile: any;

  constructor(
    public navCtrl: NavController,
    public authData: AuthData,
    public profileData: ProfileData
  ) {
    this.profileData.getProfile().subscribe(snapshot => {
      this.profileForm = snapshot.val()
      console.log('profileForm', this.profileForm);
    });
  }

  ionViewDidLoad() {
    let perfil = this.authData.currentUser();
    console.log('perfil', perfil);
  }

  logOut(){
    this.authData.logoutUser();
  }

  updateUser(){
    console.log('update user', this.profileForm)
    this.profileData.updateProfile(this.profileForm);
    if (this.profileForm.alias !== ''){
      this.authData.updateAlias(this.profileForm.alias);
    }
  }

  updateAvatar(){
    console.log('update avatar');
  }

}
