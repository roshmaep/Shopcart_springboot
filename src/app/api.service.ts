import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addproduct=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
  fetchproduct=()=>{
    return this.http.get("http://localhost:8080/view")
  }
  fetchsearch=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/search",dataToSend)
  }
  userreg=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/userregistration",datatosend)
  }
  userLogin=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/userlogin",datatosend)
  }
  getProfileDetails=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/getUserById",datatosend)
  }
 
}
