import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})export class ActionBarComponent implements OnInit {
  cost = 0;
  @Input() step = 1;
  @Input() notBelow = 0;
  @Input() notMore:null|Number = null;
  @Input() get number(){
    return this.cost;
  }
  set number(value: number){
    this.cost = value;
  }
  @Output() numberChange = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
    this.cost = this.number;
    
  }

  dataminus() {
    if (this.cost - this.step >= this.notBelow) {
      this.cost = this.cost - this.step;
      this.numberChange.emit(this.cost);
    }
  }

  dataplus() {
    if( this.notMore === null){
      this.cost = this.cost + this.step;
      this.numberChange.emit(this.cost);
    }
    else if ((this.cost+this.step)<= this.notMore ){
      this.cost = this.cost + this.step;
      this.numberChange.emit(this.cost);
    }
  }
}
