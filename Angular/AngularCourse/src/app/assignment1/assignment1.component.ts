import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  counter : number = 0;
  randomNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.counter = this.counter + 1, 200);
    setInterval(() => this.randomNumber = _.random(1,100), 2000);
  }
}
