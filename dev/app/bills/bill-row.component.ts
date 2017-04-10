import { Component, Input } from '@angular/core';

import { IBill } from './bill';

/*OBSOLETE*/
@Component({
    moduleId: module.id,
    selector: 'bill-row',
    templateUrl: 'bill-row.component.html'
})
export class BillRowComponent {
    @Input() bill : IBill;
}