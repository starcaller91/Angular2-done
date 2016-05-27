import {Component} from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
import {OrdersManagement} from './ordersManagement';
import 'rxjs/Rx'; 
import {OrderItemService} from './OrderItem'
import {Home} from './Home'



@Component({
    selector: 'app',
    //templateUrl: './asdf.html',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, OrderItemService]
})

@Routes([
        {path:'/', component: Home},
        { path: '/OrdersManagement', component: OrdersManagement}
    ])
export class App {

    constructor(private router: Router,private _orderItemService: OrderItemService) {
    }

    ngOnInit() {
        this.router.navigate(['/']);

    }
}