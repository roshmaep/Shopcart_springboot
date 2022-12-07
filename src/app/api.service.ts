import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addproduct=(dataToSend:any)=>{
    return this.http.post("",dataToSend)
  }
  fetchproduct=()=>{
    return this.http.get("")
  }
  fetchsearch=(dataToSend:any)=>{
    return this.http.post("",dataToSend)
  }
}
