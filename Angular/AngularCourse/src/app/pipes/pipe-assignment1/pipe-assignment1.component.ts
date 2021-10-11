import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-pipe-assignment1',
  templateUrl: './pipe-assignment1.component.html',
  styleUrls: ['./pipe-assignment1.component.css']
})
export class PipeAssignment1Component implements OnInit {

  grade: number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.generateRandomGrade();
    }, 2000);
  }

  generateRandomGrade(){
    this.grade = _.random(1,10);
  }
}
