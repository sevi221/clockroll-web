import { Injectable } from '@angular/core';
import { User } from './../model/user.model';
import { Weekdays } from './../model/weekdays.model';
import { Timer } from './../model/timer.model';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class WeatherService {

  private apikey: string = "3d1b52f29620414f8c4161856183003";
  private urlWeather: string = "https://api.apixu.com/v1";

  constructor(private http: Http) { }

  getWeather() {
    let url = `${this.urlWeather}/current.json?key=${this.apikey}&q=Madrid`

    return this.http.get(url)
      .map(res => res.json());

  }
}
