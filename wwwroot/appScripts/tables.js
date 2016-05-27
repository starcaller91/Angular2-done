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
var RestourantTable = (function () {
    function RestourantTable() {
        this.showDetails = false;
    }
    RestourantTable.prototype.ngOnInit = function () {
        if (this.table.taken) {
            this.color = '#f00';
        }
        else {
            this.color = '#0f1';
        }
    };
    RestourantTable.prototype.onClickTable = function () {
        if (this.table.taken) {
            this.showDetails = true;
        }
        else {
            alert('slobodno');
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Table)
    ], RestourantTable.prototype, "table", void 0);
    RestourantTable = __decorate([
        core_1.Component({
            selector: 'restourant-table',
            templateUrl: './RestourantTable.html'
        }), 
        __metadata('design:paramtypes', [])
    ], RestourantTable);
    return RestourantTable;
}());
exports.RestourantTable = RestourantTable;
var Table = (function () {
    function Table() {
        this.orders = new Array();
    }
    return Table;
}());
exports.Table = Table;
var TablesService = (function () {
    function TablesService() {
        this.numberOfTables = 12;
    }
    TablesService.prototype.getTables = function () {
        if ((!this.tables) || (this.tables.length = 0)) {
            this.tables = new Array();
            for (var i = 1; i <= this.numberOfTables; i++) {
                var t = new Table();
                t.tableNumber = i;
                this.tables.push(t);
            }
        }
        return this.tables;
    };
    TablesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TablesService);
    return TablesService;
}());
exports.TablesService = TablesService;
//# sourceMappingURL=tables.js.map