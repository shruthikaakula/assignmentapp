import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { roles } from '../models/product.model';
import { NoneService } from '../none.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  userobj:roles;

  constructor(private ar:ActivatedRoute,private ns:NoneService) { }

  ngOnInit(): void {
    let id= this.ar.snapshot.params.id;
    console.log(id)
   this.ns.getUsersById(id).subscribe(
     obj=>{
      this.userobj=obj;
       console.log(this.userobj)
     },
     err=>{
       console.log("error is",err)
     }
   )
  }

}
  