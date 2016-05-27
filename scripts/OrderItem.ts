import {Component, Injectable} from '@angular/core';
import {Http, Response} from '@angular/http'
//import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
//import {Observer} from 'rxjs/Observer';
//import 'rxjs/add/operator/share';
//import 'rxjs/add/operator/map'; 


@Component({
    selector:'order-item',
    templateUrl:''})
export class Order {
    constructor(public Id: number, public MenuId: number, public Quantity: number, public Payed: boolean, public Delivered: boolean, public Table: number) { }
}

@Injectable()
export class OrderItemService {

    constructor(private _http: Http) {
    }

    getOrderItems() {
        return this._http.get('http://localhost:49931/api/orders?kind=0')
            .map((response: Response) => <Order[]>response.json())
            .toPromise()
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error')
    }
}