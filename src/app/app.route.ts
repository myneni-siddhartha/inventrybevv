import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import { AppComponent } from './app.component';

import { ListingPageComponent } from './listing-page/listing-page.component'
import { AddProductsComponent } from './add-products/add-products.component';
import { OrderComponent } from './order/order.component';





export const routes:Routes =[
    
    {path:'',component: ListingPageComponent },
    {path:'listingPage',component: ListingPageComponent},
    {path:'addproduct',component: AddProductsComponent},
    {path:'order/:id',component: OrderComponent }
    

]
export const routing :ModuleWithProviders = RouterModule.forRoot(routes);