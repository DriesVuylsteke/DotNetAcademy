import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Holiday } from './holiday.model';

@Component({
  selector: 'app-pipe-assignment2',
  templateUrl: './pipe-assignment2.component.html',
  styleUrls: ['./pipe-assignment2.component.css']
})
export class PipeAssignment2Component implements OnInit {

  holidays : Holiday[] = new Array(5);

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.updateTemperatures();
    }, 5000);

    for(var i = 0; i < 5; i++){
      this.holidays[i] = new Holiday(
        "City: " + i,
        _.random(0,25)
      )
    }
  }

  updateTemperatures(){
    for(var i = 0; i < this.holidays.length; i++){
      var temp = _.random(0,25);
      this.holidays[i].temperature = temp;
    }
  }

}
