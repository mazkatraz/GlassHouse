import { Component, OnInit } from '@angular/core';

import { IBill } from '../bills/bill';
import { BillService } from '../bills/bill.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

    billArray : IBill[]; 

    constructor(private _billService : BillService) {

    }

    ngOnInit() : void {
        this.populateMostRecentTable();
    }

    populateMostRecentTable() : void {
        var observeables = this._billService.getRecentsFirst().subscribe(
            response => this.addToTable(response)
        )
    }

    private addToTable(response : any) : void {
        this.billArray = this.toIBillArray(response);
    }

    private toIBillArray(response : any) : IBill[]{
        
        var array = response.objects;
        return array.map((obj : Object) => this._billService.jsonToIBill(JSON.stringify(obj)));      
    }
}