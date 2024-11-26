import { Pipe, PipeTransform } from '@angular/core';
import { Model } from '../models/model';

@Pipe({
  name: 'modeleGore'
})
export class ModeleGorePipe implements PipeTransform {

  transform(value: Model[], modelText:string): Model[] {
    modelText=modelText?modelText.toLocaleLowerCase():"";
    return modelText?value.filter((p:Model)=>p.name.toLocaleLowerCase().indexOf(modelText)!==-1):value;
  }

}

