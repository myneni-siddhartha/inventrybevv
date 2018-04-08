import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location, DatePipe } from '@angular/common';

import { ListingService } from '../services/listing.service';
import { OrderService } from '../services/order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  productId: any;
  user: String;
  quantity: Number;
  productDetails: any = {
    name: '',
    quantityAvailable: ''
  };
  order: any = {
    user: '',
    quantity: '',
    product: ''
  };
  previousOrders: any[];

  constructor(private location: Location,
    private activatedR: ActivatedRoute,
    private ListingService: ListingService,
    private OrderService: OrderService) {

    this.productDetails.name = '';
    this.productDetails.quantityAvailable = '';
    // this.order.s
  }

  ngOnInit() {


    this.activatedR.params.subscribe(params => {
      this.productId = params;
      console.log(this.productId.id)
      // this.ListingService.getSingleProduct(this.productId.id)
      //   .subscribe((data) => {
      //     if (data._id) {
      //       this.productDetails.name = data.name;
      //       this.productDetails.quantityAvailable = data.quantityAvailable;
      //       this.order.product = data._id;
      //       console.log(data)
      //     }
      //     else {
      //       console.log(data)
      //     }
      //   })
      this.getSingleProductDetails();
      this.getSingleProductOrders();
    });



  }

  // tested
  placeOrder() {
    console.log("order", this.order)
    this.OrderService.placeOrder(this.order)
      .subscribe(data => {
        if (data._id) {
          alert("order placed successfully")
          console.log("order placed successfully");
          this.getSingleProductOrders();
          this.getSingleProductDetails();
          // this.back()
        }
        else {
          alert("order could not be placed--> \nplease enter correct data")
          console.log(data)
        }
      })
  }

  // tested
  cancelOrder(id) {
    console.log(id)
    this.OrderService.cancelOrder(id)
      .subscribe((data) => {
        console.log(data)
        if (data == 1) {
          alert('order cancelled sucessfully')
          this.getSingleProductOrders();
          this.getSingleProductDetails();
          // this.back();
        }
        else {
          alert("can not cancel this order");
          console.log('can not cancel this order')

        }
      })

  }

  // tested
  back() {
    this.location.back();
  }

  getSingleProductOrders() {
    this.OrderService.getSingleProductOrders(this.productId)
      .subscribe((data) => {
        this.previousOrders = data;
        console.log("orders", data)
      })
  }

  getSingleProductDetails() {
    this.ListingService.getSingleProduct(this.productId.id)
      .subscribe((data) => {
        if (data._id) {
          this.productDetails.name = data.name;
          this.productDetails.quantityAvailable = data.quantityAvailable;
          this.order.product = data._id;
          console.log(data)
        }
        else {
          console.log(data)
        }
      })
  }



}
