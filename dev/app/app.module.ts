import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { BillRowComponent } from './bills/bill-row.component';
import { BillService } from './bills/bill.service';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { TopbarComponent } from './shared/topbar/topbar.component';

@NgModule({
  imports: [ 
              BrowserModule,
              FormsModule,
              // RouterModule.forRoot([
              //   {path: '', component: AppComponent}
              // ]),
              HttpModule,
              JsonpModule
            ],
  declarations: [ AppComponent, 
                  HomeComponent,
                  SidenavComponent, 
                  TopbarComponent
                 ],
  providers: [ BillService ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
