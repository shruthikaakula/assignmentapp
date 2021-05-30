/*
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import{DetailsService} from '../details.service'


@Component({
  selector: 'app-product-s',
  templateUrl: './product-s.component.html',
  styleUrls: ['./product-s.component.css'],
})
export class ProductSComponent implements OnInit {

  products:Products[]=[];

   constructor(private dsObj:DetailsService){

   }

   ngOnInit(){
    this.dsObj.getProductsData().subscribe(
      data=>{this.products=data;},
      err=>{console.log("error:",err)}
    )
   }
}
*/