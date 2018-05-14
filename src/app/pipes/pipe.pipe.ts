import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class PipePipe implements PipeTransform {
searchTxt = [];
    transform (values: any[], args?: any): any {
        if (args === '') {
            return values;
        }
        return values.filter(val => val.name.indexOf(args) > -1);
    }

}