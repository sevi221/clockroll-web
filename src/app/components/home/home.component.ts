import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../shared/service/weather.service';
import { TimerService } from '../../shared/service/timer.service';
import { Timer } from '../../shared/model/timer.model';

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
          .subscribe(weather => { console.log(weather) });
   }

  getTime() {
    this.timer = this.timerService.getTime();
  }


}
