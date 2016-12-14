import { Component } from '@angular/core';

/*
  Generated class for the WeekCalendar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'week-calendar',
  templateUrl: 'week-calendar.html'
})
export class WeekCalendarComponent {

  text: string;

  constructor() {
    console.log('Hello WeekCalendar Component');
    this.text = 'Hello World';
  }

}
