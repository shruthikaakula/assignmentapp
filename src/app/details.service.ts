import { Injectable } from '@angular/core';
import { Products } from './models/product.model';
import{HttpClient} from '@angular/common/http'
import{Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  //injecting clint service
  constructor(private hc:HttpClient) { }
  
  

  getProductsData():Observable<Products[]>{
    return this.hc.get<Products[]>("assets/output.json")
  }
}
