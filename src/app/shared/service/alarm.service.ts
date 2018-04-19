import { Injectable } from '@angular/core';
import { User } from './../model/user.model';
import { Weekdays } from './../model/weekdays.model';
import { Timer } from './../model/timer.model';
import { Alarm } from './../model/alarm.model';


@Injectable()
export class AlarmService {
  alarm: Alarm = new Alarm;
  timer: Timer = new Timer;
  sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/clocks/clock_chime.wav");

  constructor() {}

  formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  getTime(){
    const date = new Date();
      this.timer.hours = this.formatTime(date.getHours());
      this.timer.minutes = this.formatTime(date.getMinutes());
      this.timer.seconds = this.formatTime(date.getSeconds());
    return this.timer;
  }

  setAlarm(){
    const date = new Date();
      this.alarm.hours = this.formatTime(date.getHours());
      this.alarm.minutes = this.formatTime(date.getMinutes());
      this.alarm.seconds = this.formatTime(date.getSeconds());
    return this.alarm;
  }

playAlarm(){
    if (this.timer == this.alarm)
    return this.sound.play();
    }

// stopAlarm() {
//
//   	document.getElementById('alarmhrs').disabled = false;
//   	document.getElementById('alarmmins').disabled = false;
//   	sound.pause();
//   }
}
