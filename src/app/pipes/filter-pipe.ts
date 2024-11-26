import { Pipe, PipeTransform } from '@angular/core';
import { Model } from '../models/model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Model[], filterText:string): Model[] {
    filterText=filterText?filterText.toLocaleLowerCase():"";
    return filterText?value.filter((p:Model)=>p.brandName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
