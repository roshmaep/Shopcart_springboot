import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent {
  constructor(private api:ApiService){
  api.fetchproduct().subscribe((response)=>
  {this.fetchsearch=response;})}
  productname=""
  fetchsearch:any =[]
  readValue=()=>
  {
    let data:any={
    "productname":this.productname}
    console.log(data)
    
    this.api.fetchsearch(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length == 0) {
          alert("Invalide product name")
          
        } else {
          this.fetchsearch = response
          
        }
      }
    )
  }
  
products:any=[]
}
