"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
//import 'rxjs/Rx';
var Observable_1 = require('rxjs/Observable');
//import {Observer} from 'rxjs/Observer';
//import 'rxjs/add/operator/share';
//import 'rxjs/add/operator/map'; 
var Order = (function () {
    function Order(Id, MenuId, Quantity, Payed, Delivered, Table) {
        this.Id = Id;
        this.MenuId = MenuId;
        this.Quantity = Quantity;
        this.Payed = Payed;
        this.Delivered = Delivered;
        this.Table = Table;
    }
    Order = __decorate([
        core_1.Component({
            selector: 'order-item',
            templateUrl: '' }), 
        __metadata('design:paramtypes', [Number, Number, Number, Boolean, Boolean, Number])
    ], Order);
    return Order;
}());
exports.Order = Order;
var OrderItemService = (function () {
    function OrderItemService(_http) {
        this._http = _http;
    }
    OrderItemService.prototype.getOrderItems = function () {
        return this._http.get('http://localhost:49931/api/orders?kind=0')
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    OrderItemService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    OrderItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OrderItemService);
    return OrderItemService;
}());
exports.OrderItemService = OrderItemService;
//# sourceMappingURL=OrderItem.js.map