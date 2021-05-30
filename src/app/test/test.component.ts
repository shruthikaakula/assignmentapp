import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { roles } from '../models/product.model';
import{ NoneService } from '../none.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myUsers:roles[]=[];
 
  constructor(private nsObj:NoneService,private router:Router ) { }

  ngOnInit(): void {
    this.nsObj.getUsers().subscribe(
      products=>{
        this.myUsers=products;
        
      },
      err=>{
        console.log("error is",err)
      }
    )

    }

    onSelectId(id){

      this.router.navigateByUrl('test/'+id)

    }

  }


