import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  counter : number = 0;
  randomNummber: number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(this.upCounter, 200);
    setInterval(this.updateRandomNumber, 2000);
    this.updateRandomNumber();
  }

  upCounter(){
    this.counter = this.counter + 1;
  }

  updateRandomNumber(){
    this.randomNummber = _.random(1,100);
  }
}
