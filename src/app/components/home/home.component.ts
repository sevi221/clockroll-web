import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../shared/service/weather.service';
import { TimerService } from '../../shared/service/timer.service';
import { Timer } from '../../shared/model/timer.model';
import { AlarmService } from '../../shared/service/alarm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent {
  timer: Timer = new Timer();
  weather: Object = null;

  constructor(
    public weatherService: WeatherService,
    public timerService: TimerService
  ) {
    setInterval(() => this.getTime(), 1000);
  }

  ngOnInit() {
    this.weatherService.getWeather()
      .subscribe(weather => {
        this.weather = weather;
        console.log(this.weather);
      });
  }

  getTime() {
    this.timer = this.timerService.getTime();
  }
  //   $(function() {
  //     $(".lightTheme").toggleClass("darkTheme");
  //     $(".darkTheme").toggleClass("lightTheme");
  // }

}
