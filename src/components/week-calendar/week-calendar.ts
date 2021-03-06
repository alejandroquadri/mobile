import { Component, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'week-calendar',
  templateUrl: 'week-calendar.html'
})
export class WeekCalendarComponent {

  selected: any;
  weekDays: any;
  @Output() selectedDay = new EventEmitter();

  constructor() {
    this.selected = this.removeTime(this.selected || moment());
    this.buildWeek(this.selected);
  }

  select(day) {
    this.selected = day.date;
    // this.emitDay(day);
    this.selectedDay.emit(day)
  };

  emitDay(day) {
    this.selectedDay.emit(day);
  }

  next() {
    let next = this.selected.clone();
    this.removeTime(next.week(next.week()+1)).day(0);
    this.selected.week(this.selected.week()+1);
    this.buildWeek(next);
  };

  previous() {
    let next = this.selected.clone();
    this.removeTime(next.week(next.week()-1)).day(0);
    this.selected.week(this.selected.week()-1);
    this.buildWeek(next);
  };

  private removeTime(date){
      return date.day(0).hour(0).minute(0).second(0).millisecond(0);
  }

  private buildWeek(start) {
    this.weekDays = [];
    let date = start.clone();

    for (var i = 0; i < 7; i++) {
        this.weekDays.push({
            name: date.format("dd").substring(0, 1),
            number: date.date(),
            isToday: date.isSame(new Date(), "day"),
            date: date
        });
        date = date.clone();
        date.add(1, "d");
    }
  }

}
