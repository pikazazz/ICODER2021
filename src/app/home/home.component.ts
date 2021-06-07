import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    this.sumResult();
  }
  result = 0;
  actionBarNumber1 = 0;
  actionBarNumber2 = 10;
  actionBarNumber3 = 100;

  sumResult(){
    this.result =  this.actionBarNumber1 + this.actionBarNumber2 + this.actionBarNumber3;
  }
}
