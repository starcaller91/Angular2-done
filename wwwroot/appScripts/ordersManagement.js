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
var tables_1 = require('./tables');
var OrderItem_1 = require('./OrderItem');
var router_1 = require('@angular/router');
var OrdersManagement = (function () {
    function OrdersManagement(_tablesService, _orderItemService) {
        this._tablesService = _tablesService;
        this._orderItemService = _orderItemService;
        this.show = false;
    }
    OrdersManagement.prototype.ngOnInit = function () {
        var _this = this;
        this.tables = this._tablesService.getTables();
        // this._orderItemService.getOrderItems().forEach(x => console.log(x));
        this._orderItemService.getOrderItems().then(function (x) { _this.checkIfTableIsTaken(x); _this.orderItems = x; });
        //this._orderItemService.getOrderItems().forEach(x => console.log(x));
    };
    OrdersManagement.prototype.checkIfTableIsTaken = function (orders) {
        for (var _i = 0, _a = this.tables; _i < _a.length; _i++) {
            var table = _a[_i];
            for (var _b = 0, orders_1 = orders; _b < orders_1.length; _b++) {
                var order = orders_1[_b];
                if (order.Table == table.tableNumber) {
                    table.orders.push(order);
                }
            }
            if (table.orders.length > 0)
                table.taken = true;
        }
        this.show = true;
    };
    OrdersManagement = __decorate([
        core_1.Component({
            selector: 'orders-management',
            templateUrl: './OrdersManagement.html',
            directives: [router_1.ROUTER_DIRECTIVES, tables_1.RestourantTable],
            providers: [tables_1.TablesService]
        }), 
        __metadata('design:paramtypes', [tables_1.TablesService, OrderItem_1.OrderItemService])
    ], OrdersManagement);
    return OrdersManagement;
}());
exports.OrdersManagement = OrdersManagement;
//# sourceMappingURL=ordersManagement.js.map