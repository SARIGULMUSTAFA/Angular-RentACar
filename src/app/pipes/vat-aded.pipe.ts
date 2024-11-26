import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAded'
})
export class VatAdedPipe implements PipeTransform {

  transform(value: number, rate:number): number {
    return value+(value*rate/100);
  }

}
