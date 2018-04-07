import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';   
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.route';





// services
import { LoginServiceService } from './services/login-service.service';
import { ListingService } from './services/listing.service';
import { OrderService } from './services/order.service';

import { ListingPageComponent } from './listing-page/listing-page.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    ListingPageComponent,
    AddProductsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

  ],  
  providers: [
    LoginServiceService,
    ListingService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
