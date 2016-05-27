import {Component, Input, Injectable} from '@angular/core';
import {Order} from './OrderItem'

@Component({
    selector: 'restourant-table',
    templateUrl: './RestourantTable.html'
})
export class RestourantTable {
    @Input() table: Table;
    color: string;
    showDetails = false;

    ngOnInit() {

        if (this.table.taken) {
            this.color = '#f00';
        } else {
            this.color = '#0f1';
        }
    }


    onClickTable() {
        if (this.table.taken) {
            this.showDetails = true;
        }
        else {
            alert('slobodno');
        }
    }


}

export class Table {
    tableNumber: number;
    taken: boolean;
    orders: Order[];

    constructor() {
        this.orders = new Array();
    }
}


@Injectable()
export class TablesService {
    tables: Table[];
    numberOfTables = 12;


    getTables() {
        if ((!this.tables) || (this.tables.length = 0)) {
            this.tables = new Array();
            for (var i = 1; i <= this.numberOfTables; i++) {
                var t = new Table();
                t.tableNumber = i;
                this.tables.push(t);
            }
        }

        return this.tables;

    }
}