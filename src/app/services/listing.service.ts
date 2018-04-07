import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';




let headers = new Headers();
headers.append('Content-Type', 'application/json');

@Injectable()
export class ListingService {

  constructor(
    private http: Http) {

  }
  // all tested OK
  test() {
    console.log("listing page")
    return 0;
  }

  getAllProducts() {

    return this.http.get(environment.baseURL + 'product/getAllProducts', { headers: headers })
      .map(res => res.json());
  }

  getSingleProduct(id){
    return this.http.get(environment.baseURL + 'product/getProduct/'+id, { headers: headers })
      .map(res => res.json());
  }

  addProduct(object) {
    console.log("service>>",object)
    return this.http.post(environment.baseURL + 'product/newproduct',object,{ headers: headers })
    .map(res=> res.json());

  }

}
