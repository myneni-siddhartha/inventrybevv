import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing.service';

import { Router, ActivatedRoute, Params } from '@angular/router';// for internal routing 


@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit {

  productDetails: any=[];

  constructor(private Listing:ListingService
    ,private router: Router) { 
    
  }

  // testedOK

  ngOnInit() {

    this.Listing.test();
    this.Listing.getAllProducts().subscribe((data)=>{
      this.productDetails = data;
      console.log(data)
    })
  }

  callButton(){
    console.log("botton clicked");
  }


  buyProduct(productId){
    this.router.navigateByUrl('/order/'+productId);
  }

}
