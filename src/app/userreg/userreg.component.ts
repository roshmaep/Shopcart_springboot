import { Component } from '@angular/core';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {
  name=""
  address=""
  email=""
  phone=""
  password=""
  cpassword=""

  readValues=()=>
  {
    let data:any={"name":this.name,"address":this.address,"email":this.email,"phone":this.phone,"password":this.password,"cpassword":this.cpassword}
    console.log(data)
  }
}
