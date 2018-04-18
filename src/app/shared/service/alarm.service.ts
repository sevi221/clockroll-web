import { Injectable } from '@angular/core';
import { User } from './../model/user.model';
import { Weekdays } from './../model/weekdays.model';
import { Timer } from './../model/timer.model';
import { Alarm } from './../model/alarm.model';


@Injectable()
export class AlarmService {
  alarm: Alarm = new Alarm;

  constructor() {
  }

  // getTime(){
  //   const date = new Date();
  //   this.timer.hours = this.formatTime(date.getHours());
  //   this.timer.minutes = this.formatTime(date.getMinutes());
  //   this.timer.seconds = this.formatTime(date.getSeconds());
  //   return this.timer;
  // }

  // formatTime(time) {
  //   return time < 10 ? `0${time}` : time;
  // }
}
