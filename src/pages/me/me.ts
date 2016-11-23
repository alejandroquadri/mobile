import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// paginas
import { ProfilePage } from '../profile/profile';
import { ProgressPage } from '../progress/progress';
import { CoachPage } from '../coach/coach';

// providers
import { AuthData } from '../../providers/auth-data';
import { ProfileData } from '../../providers/profile-data';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {

  public current: any
  public avatar: string = "./assets/images/smiley-cyrus.jpg";
  public profileForm: any;

  constructor(
    public navCtrl: NavController,
    public authData: AuthData,
    public profileData: ProfileData
  ) {
    this.current = authData.currentUser();
    console.log('current', this.current.photoURL)
    this.getProfileData();
  }

  ionViewDidLoad() {
    console.log('Hello MePage Page');
  }

  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }

  goToProgress(){
    this.navCtrl.push(ProgressPage);
  }

  goToCoach(){
    this.navCtrl.push(CoachPage);
  }

  getProfileData(){
    this.profileData.getProfile().subscribe(snapshot => {
      this.profileForm = snapshot.val()
      console.log('profileForm', this.profileForm);
    });
  }

}
