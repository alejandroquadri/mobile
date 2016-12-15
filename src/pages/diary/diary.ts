import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';

/*
  Generated class for the Diary page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-diary',
  templateUrl: 'diary.html'
})
export class DiaryPage {

  day: any = moment()

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello DiaryPage Page');
  }

  setDay(day){
    this.day = day.date;
  }

}
