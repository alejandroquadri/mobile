import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// servicios
import { AuthData } from '../../providers/auth-data';
import { ProfileData } from '../../providers/profile-data';
import { CameraService } from '../../providers/camera-service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public profileForm: any = {
    firstName: '',
    lastName: '',
    bio: '',
    displayName: '',
    birthDate: '',
  }
  public avatar: string = "./assets/images/smiley-cyrus.jpg";
  public profile: any;
  public current: any;

  constructor(
    public navCtrl: NavController,
    public authData: AuthData,
    public profileData: ProfileData,
    public camera: CameraService
  ) {
    this.current = authData.currentUser();
    console.log('usuario logueado', this.current);
    this.getProfileData();
  }

  logOut(){
    this.authData.logoutUser();
  }

  getProfileData(){
    this.profileData.getProfile().subscribe(snapshot => {
      this.profileForm = snapshot.val()
      console.log('profileForm', this.profileForm);
    });
  }

  updateUser(){
    console.log('update user', this.profileForm)
    this.profileData.updateProfile(this.profileForm);
    this.authData.updateAuthProfile({displayName: this.profileForm.displayName});
  }

  updateAvatar(){
    console.log('update avatar');
    this.camera.getImageUrl('avatar')
    .then((url) => {
      console.log('url update', url)
      this.authData.updateAuthProfile({photoURL: url});
      this.profileData.updateProfile({photoURL: url});
    }, (err) => {
      console.log('err', err);
    })
  }
}
