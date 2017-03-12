import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IBill } from './bill';
import { BillStatusColors } from '../bills/bill-status-colors';

@Injectable()
export class BillService {

    constructor(private http: Http) {}

    getRecentsFirst() : Observable<any> {
        let params = new URLSearchParams();
        params.set('congress', '114');
        params.set('order_by', '-current_status_date');

        return this.http.get("https://www.govtrack.us/api/v2/bill", {
            search: params
        }).map(res => res.json());
    }

    jsonToIBill(json : string) : IBill {

        var jsonObject = JSON.parse(json);
        var returnObject : IBill = this.newBill();
        
        for (var propName in jsonObject) {       
            returnObject[propName] = jsonObject[propName]
        }

        returnObject.bill_status_color = this.getBillStatusColor(jsonObject.current_status);
        console.log("Color: " + returnObject.bill_status_color);

        return returnObject;
    }

    newBill() : IBill {
        return {
            id: 0,
            bill_resolution_type: "",
            bill_type: "",
            bill_status_color: "",
            current_status: "",
            current_status_date: "",
            current_status_description: "",
            current_status_label: "",
            introduced_date: "",
            related_bills: [],
            sponsor: {
                id: 0,
                name: ""
            },
            title_without_number: ""
        }
    }

    private error ( method: string, error : any) : void {
        console.log("An error has occurred for " + method + ": " + error);
    }

    private getBillStatusColor(status : string) : string{
        switch(status){
            case "prov_kill_veto" :
                return "label-danger";
            case "fail_second_senate" :
                return "label-danger";
            case "passed_bill" :
                return "label-success";
            case "passed_constamend" :
                return "label-success";
            case "pass_back_senate" :
                return "label-warning";
            case "vetoed_override_fail_second_house" :
                return "label-danger";
            case "fail_originating_house" :
                return "label-danger";
            case "fail_second_house" :
                return "label-danger";
            case "override_pass_over_house" :
                return "label-info";
            case "override_pass_over_senate" :
                return "label-info";
            case "pass_back_house" :
                return "label-warning";
            case "prov_kill_cloturefailed" :
                return "label-warning";
            case "enacted_veto_override" :
                return "label-info";
            case "passed_concurrentres" :
                return "label-success";
            case "prov_kill_suspensionfailed" :
                return "label-warning";
            case "passed_simpleres" :
                return "label-success";
            case "vetoed_pocket" :
                return "label-default";
            case "vetoed_override_fail_originating_house" :
                return "label-danger";
            case "conference_passed_senate" :
                return "label-success";
            case "fail_originating_senate" :
                return "label-danger";
            case "pass_over_senate" :
                return "label-success";
            case "prov_kill_pingpongfail" :
                return "label-warning";
            case "enacted_signed" :
                return "label-success";
            case "pass_over_house" :
                return "label-success";
            case "conference_passed_house" :
                return "label-success";
            case "reported" :
                return "label-primary";
            case "vetoed_override_fail_second_senate" :
                return "label-danger";
            case "vetoed_override_fail_originating_senate" :
                return "label-danger";
            case "enacted_tendayrule" :
                return "label-success";
            case "introduced" :
                return "label-primary";
            case "enacted_unknown" :
                return "label-success";
            case "referred" :
                return "label-primary";
        }
    }


}