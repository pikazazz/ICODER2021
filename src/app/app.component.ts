import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title="fornendAng";
  ngOnInit(): void {

  }

  summary:number = 0;
  employee = {
    name:'บาท',
    price:10
  };
  oneBathList: number[] = [];
  fiveBahtList = [4,10,8,20,50];

  transForm(){
    this.oneBathList = this.fiveBahtList.map(num=>{
      return num*5;
    });
  }

  sum(){
     let sumCost = 0;
    //  for(let index =0 ; index < this.fiveBahtList.length;index++){
    //    sumCost = sumCost + this.fiveBahtList[index]*5
    //  }
    //  this.summary = sumCost;

    this.summary = this.fiveBahtList.reduce((sumCost,num) =>{
      // sumCost = 0 num = 4  0+45
      // sumCost = 20 num = 10  20+105
      // sumCost = 70 num = 8  70+85
      // fiveBathlist = [4,10,8];
      return sumCost + num*5;
    },0)
  }
}
