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
var router_1 = require('@angular/router');
var ordersManagement_1 = require('./ordersManagement');
require('rxjs/Rx');
var OrderItem_1 = require('./OrderItem');
var Home_1 = require('./Home');
var App = (function () {
    function App(router, _orderItemService) {
        this.router = router;
        this._orderItemService = _orderItemService;
    }
    App.prototype.ngOnInit = function () {
        this.router.navigate(['/']);
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            //templateUrl: './asdf.html',
            template: '<router-outlet></router-outlet>',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS, OrderItem_1.OrderItemService]
        }),
        router_1.Routes([
            { path: '/', component: Home_1.Home },
            { path: '/OrdersManagement', component: ordersManagement_1.OrdersManagement }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, OrderItem_1.OrderItemService])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map