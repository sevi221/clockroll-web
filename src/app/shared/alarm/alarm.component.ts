import { Component, Injectable } from '@angular/core';
import { User } from './../model/user.model';
import { Timer } from './../model/timer.model';
import { Alarm } from './../model/alarm.model';
import { TimerService } from './../service/timer.service';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})

export class AlarmComponent {
  hours: String = "";
  alarm: Alarm = new Alarm;
  timer: Timer = new Timer;
  sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/clocks/clock_chime.wav");

  constructor() { }


  formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  getTime() {
    const date = new Date();
    this.timer.hours = this.formatTime(date.getHours());
    this.timer.minutes = this.formatTime(date.getMinutes());
    this.timer.seconds = this.formatTime(date.getSeconds());
    return this.timer;
  }

  onSetAlarm() {
    let alarm = new Date();
    alarm.setHours(Number(this.hours.split(":")[0]));
    alarm.setMinutes(Number(this.hours.split(":")[1]));
    alarm.setSeconds(0);

    const runIn = alarm.getTime() - new Date().getTime();
    // console.log("Alarm will run in " + runIn 'ms');

    setTimeout(() => {
      this.sound.play();
    }, runIn);
  }

}
