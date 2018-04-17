import { Component, NgModule } from '@angular/core';
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

   constructor(
     public weatherService: WeatherService,
     public timerService: TimerService
   ) {
     setInterval(() => this.getTime(), 1000);
        this.weatherService.getWeather()
          .subscribe(weather => { console.log (weather.current.temp_) });
   }

  getTime() {
    this.timer = this.timerService.getTime();
  }


}
