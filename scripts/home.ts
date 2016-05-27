import {Component, Input} from '@angular/core'
import {Table, TablesService} from './tables'
import {Order, OrderItemService} from './OrderItem'
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
    selector: 'home-page',
    templateUrl: './home.html',
    directives: [ROUTER_DIRECTIVES],

})
export class Home {

    paddingTop = '80px';

}