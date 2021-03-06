import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { AppRoutingModule } from './app.routing';

import { DropdownModule } from 'primeng/dropdown';
import {PanelMenuModule} from 'primeng/panelmenu';
// import {MenuItem} from 'primeng/api';
import {
  ButtonModule,
  // CalendarModule,
  InputTextModule,
  // MegaMenuModule,
  // MenuItem,
  // OverlayPanelModule,
  // PanelMenuModule,
  SelectButtonModule,
  TabViewModule
} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './dashboard/product/product.component';
import { StoreComponent } from './dashboard/store/store.component';
import { StoreownerComponent } from './dashboard/storeowner/storeowner.component';
import { StoredetailsComponent } from './dashboard/store/storedetails/storedetails.component';
import { ProductdetailsComponent } from './dashboard/product/productdetails/productdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    SidemenuComponent,
    HeaderComponent,
    ProductComponent,
    StoreComponent,
    StoreownerComponent,
    StoredetailsComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    PanelMenuModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule
    // MenuItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
