import {Component, Input} from '@angular/core'
import {Table, TablesService, RestourantTable} from './tables'
import {Order, OrderItemService} from './OrderItem'
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES} from '@angular/router';



@Component({
    selector: 'orders-management',
    templateUrl: './OrdersManagement.html',
    directives: [ROUTER_DIRECTIVES, RestourantTable],
    providers: [TablesService]
})

export class OrdersManagement {

    tables: Table[];
    orderItems: Order[];
    show = false;

    constructor(private _tablesService: TablesService, private _orderItemService: OrderItemService) {
    }

    ngOnInit() {
        this.tables = this._tablesService.getTables();
       // this._orderItemService.getOrderItems().forEach(x => console.log(x));
        this._orderItemService.getOrderItems().then(x => { this.checkIfTableIsTaken(x); this.orderItems = x; });
        //this._orderItemService.getOrderItems().forEach(x => console.log(x));
    }


    checkIfTableIsTaken(orders: Order[]) {
        for (var table of this.tables) {
            for (var order of orders) {
                if (order.Table == table.tableNumber) {
                    table.orders.push(order);
                }
            }
            if (table.orders.length > 0) table.taken = true;
        }
        this.show = true;
    }

}