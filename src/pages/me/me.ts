import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// paginas
import { ProfilePage } from '../profile/profile';
import { ProgressPage } from '../progress/progress';
import { CoachPage } from '../coach/coach';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {

  constructor(public navCtrl: NavController) {}

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

}
