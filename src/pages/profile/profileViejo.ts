import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

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

  constructor(
    public navCtrl: NavController,
    public authData: AuthData,
    public profileData: ProfileData,
    public camera: CameraService,
    public af: AngularFire
  ) {}

  ionViewDidLoad() {
    this.getProfileData();
  }

  logOut(){
    this.authData.logoutUser();
  }

  getProfileData(){
    // this.profileForm = {
    //   firstName: this.profileData.currentProfile.firstName || '',
    //   lastName: this.profileData.currentProfile.lastName || '',
    //   bio: this.profileData.currentProfile.bio || '',
    //   displayName: this.profileData.currentProfile.displayName || '',
    //   birthDate: this.profileData.currentProfile.birthDate || ''
    // }
    if (this.profileData.currentProfile){
      this.profileForm = this.profileData.currentProfile
    } else {
      console.log('no hay currentProfile');
    }
  }

  updateUser(){
    console.log('update user', this.profileForm)
    this.profileData.updateProfile(this.profileForm);
  }

  updateAvatar(){
    // console.log('update avatar');
    // this.camera.getImageUrl('avatar')
    // .then((url) => {
    //   console.log('url update', url)
    //   this.profileData.updateProfile({photoURL: url});
    // }, (err) => {
    //   console.log('err', err);
    // })
  }

  updateAvatar2(){
    this.camera.takePicture();
    this.camera.imageData
    .subscribe((imageData) => {
      let vuelta = JSON.stringify(imageData);
      console.log('vuleta de observable', vuelta);
      this.profileData.updateProfile(imageData);
    })
  }

  //  src="{{pathForImage(lastImage)}}"


}
