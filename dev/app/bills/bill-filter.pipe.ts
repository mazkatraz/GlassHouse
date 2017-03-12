import { PipeTransfor, Pipe } from '@angular/core';

@Pipe({
    name : 'billFilter'
})

export class BillRowFilterPipe implements PipeTransform {
    transform(value: IBill[], filterBy: string) : IBill[] {
    
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        
        return filterBy ? value.filter((bill: IBill) => 
            bill.title_without_number.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}