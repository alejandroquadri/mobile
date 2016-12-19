import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';

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
