import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserregComponent } from './userreg/userreg.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { CardviewComponent } from './cardview/cardview.component';
import { NavbaruserComponent } from './navbaruser/navbaruser.component';
const myRoute:Routes=[{
  path:"",
  component:AdminComponent
},{
  path:"view",
  component:ViewproductComponent
},{
  path:"search",
  component:SearchComponent
},{
  path:"nav",
  component:NavbarComponent
},{
  path:"userlogin",
  component:UserloginComponent
},{
  path:"userreg",
  component:UserregComponent
},{
  path:"add",
  component:AddproductComponent
},{
  path:"nav2",
  component:NavbaradminComponent
},{
  path:"card",
  component:CardviewComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserregComponent,
    UserloginComponent,
    AddproductComponent,
    ViewproductComponent,
    SearchComponent,
    NavbarComponent,
    NavbaradminComponent,
    CardviewComponent,
    NavbaruserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
