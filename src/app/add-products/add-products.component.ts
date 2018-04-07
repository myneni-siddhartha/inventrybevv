import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ListingService } from '../services/listing.service';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  product: any;
  name: String;
  quantity: Number;


  constructor(
    private location: Location,
    private Listing: ListingService) {
    this.product = {};
  }

  ngOnInit() {
  }

  // tested
  back() {
    this.location.back();
  }

  // tested
  addProduct() {
    this.product.name = this.name;
    this.product.quantityAvailable = this.quantity;
    console.log(this.product);
    this.Listing.addProduct(this.product)
      .subscribe((data) => {
        if (data._id) {
          alert("added the new product succesfully")
          this.back();
        }
        else {
          alert("could not add the product--> \nplease enter valid data")          
          console.log(data)
        }
      })
  }
}
