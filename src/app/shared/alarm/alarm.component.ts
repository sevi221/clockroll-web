import { Component, OnInit, Injectable } from '@angular/core';
import { User } from './../model/user.model';
import { Timer } from './../model/timer.model';
import { Alarm } from './../model/alarm.model';
import { TimerService } from './../service/timer.service';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {
  alarm: Alarm = new Alarm;
  timer: Timer = new Timer;
  sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/clocks/clock_chime.wav");

  constructor() {}

  getTime(){
    const date = new Date();
    this.timer.hours = this.formatTime(date.getHours());
    this.timer.minutes = this.formatTime(date.getMinutes());
    this.timer.seconds = this.formatTime(date.getSeconds());
    return this.timer;
  }

  formatTime(time) {
    return time < 10 ? `0${time}` : time;
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

  ngOnInit() {
  }

}
