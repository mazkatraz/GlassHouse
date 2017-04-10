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
    listFilter : string = '';

    /**
     * Inject the service into the component
     */
    constructor(private _billService : BillService) {

    }

    /**
     * Populate the table during the OnInit lifecycle phase
     */
    ngOnInit() : void {
        this.populateMostRecentTable();
    }

    /**
     * Asychronously get recent bills and add to table
     */
    populateMostRecentTable() : void {
        var observeables = this._billService.getRecentsFirst().subscribe(
            response => this.addToTable(response)
        )
    }

    /**
     * Sets parameter to bill array
     * @param {any} response
     */
    private addToTable(response : any) : void {
        this.billArray = this.toIBillArray(response);
    }

    /**
     * Sets objects to bills to make a bill array
     * @param {any} response
     */
    private toIBillArray(response : any) : IBill[]{
        
        var array = response.objects;
        return array.map((obj : Object) => this._billService.jsonToIBill(JSON.stringify(obj)));      
    }
}