import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';
import { roles } from './models/product.model';


@Injectable({
  providedIn: 'root'
})
export class NoneService {

  constructor(private hc:HttpClient) { }

  getUsers():Observable<roles[]>{
      return this.hc.get<roles[]>('http://localhost:3000/users')
  }

 getUsersById(id):Observable<roles>{

  return this.hc.get<roles>('http://localhost:3000/users/'+id)
 }
  
}

