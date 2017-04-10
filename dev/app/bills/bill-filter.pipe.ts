import { PipeTransform, Pipe } from '@angular/core';
import { IBill } from './bill';

@Pipe({
    name : 'billFilter'
})

/**
 * Filters bill by the bill title
 * @param {IBill[]} value
 * @param {string} filterBy
 * @return {IBill[]}
 */
export class BillRowFilterPipe implements PipeTransform {
    transform(value: IBill[], filterBy: string) : IBill[] {
    
        //If search text is empty string filterBy will be null
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        
        //If there's a filterBy value, use it to filter. If not, return the original array.
        return filterBy ? value.filter((bill: IBill) => 
            bill.title_without_number.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}