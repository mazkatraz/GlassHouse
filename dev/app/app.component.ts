import { Component, ElementRef, ViewChild, Renderer } from '@angular/core';

import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { HomeComponent } from './home/home.component';

var Canvas = require('../assets/js/chart-master/Chart.js');

import '../assets/js/jquery.js';
var SparkLine = require('../assets/js/jquery.sparkline.js');


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent { 

    // @ViewChild('serverstatus01') serverstatus01 : ElementRef;
    // @ViewChild('serverstatus02') serverstatus02 : ElementRef;
    // @ViewChild('sparkline') sparkLine : ElementRef;

    constructor(){
        //this.populateRecentBillsTable();
    }

    ngAfterViewInit() {
        // this.initializeServerStatus01Doughnut();
        // this.initializeServerStatus02Doughnut();
        
    }

    // private initializeServerStatus01Doughnut() : void {
    //     var doughnutData = [
    //         {
    //             value: 70,
    //             color:"#68dff0"
    //         },
    //         {
    //             value : 30,
    //             color : "#fdfdfd"
    //         }
    //         ]; 

    //         new Canvas(this.serverstatus01.nativeElement.getContext('2d')).Doughnut(doughnutData)
    // }

    // private initializeServerStatus02Doughnut() : void {
    //     var doughnutData = [
    //         {   value: 60,
    //             color:"#68dff0"
    //         },
    //         {
    //             value : 40,
    //             color : "#444c57"
    //         }
    //     ];      
        
    //     new Canvas(this.serverstatus02.nativeElement.getContext('2d')).Doughnut(doughnutData);
    // }

    // private populateRecentBillsTable() : void {
        
    //     this._billService.getRecentsFirst()
    //     .subscribe(
    //         response => this._billService.toIBillArray(response),
    //         error => error(error),
    //         () => console.log("getRecentsFirst()")
    //     );
    // }

    // private populateTable(response : any){
    //     return this._billService.toIBillArray(response);
    // }

    
}
