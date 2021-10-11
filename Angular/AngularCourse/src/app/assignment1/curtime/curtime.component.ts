import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curtime',
  templateUrl: './curtime.component.html',
  styleUrls: ['./curtime.component.css']
})
export class CurtimeComponent implements OnInit {

  constructor() { }
  curTime : string = "HH:mm:ss";

  ngOnInit(): void {
    setInterval(() => {
      var date = new Date();
      //this.curTime = date.toTimeString();
      this.curTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }, 1000);

  }

}
