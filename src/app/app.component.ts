import { Component, OnInit } from '@angular/core';
import { WeatherService } from './shared/service/weather.service'
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent implements OnInit{


  constructor(public _ws:WeatherService){

    this._ws.getWeather()
      .subscribe( data => {
        console.log(data);
      })
  }
  ngOnInit(){

  }

}
