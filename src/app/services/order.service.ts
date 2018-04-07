import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


let headers = new Headers();
headers.append('Content-Type', 'application/json');


@Injectable()
export class OrderService {

  constructor(private http: Http) { }

  // all tested OK
  getSingleProductOrders(productId){
    console.log(productId.id)
    return this.http.get(environment.baseURL + 'order/getSingleProductDetails/'+productId.id, { headers: headers })
      .map(res => res.json());
  }

  placeOrder(object) {

    return this.http.post(environment.baseURL + 'order/newOrder',object, { headers: headers })
      .map(res => res.json());
  }

  cancelOrder(id) {
    console.log(id)
    return this.http.post(environment.baseURL + 'order/cancelOrder',{id:id}, { headers: headers })
      .map(res => res.json());
  }


}
