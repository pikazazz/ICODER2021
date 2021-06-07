import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ma4jay3',
  templateUrl: './ma4jay3.component.html',
  styleUrls: ['./ma4jay3.component.css']
})


export class Ma4jay3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'มา 4 จ่าย 3';
  total  = 0;


  priceCal(value: string){

    if(value=="สามร้อยยี่สิบ"){
      const price  = 320;
      this.total =  (price*3/4);
    }else{
      const price = Number(value);
      this.total =  (price*3/4);
    }


  }
}
