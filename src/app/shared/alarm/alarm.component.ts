import { Component, OnInit, Injectable } from '@angular/core';
import { User } from './../model/user.model';
import { Timer } from './../model/timer.model';
import { TimerService } from './../service/timer.service'
import { Alarm } from './../model/alarm.model';


@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
