import { Pipe, PipeTransform } from '@angular/core';
import { Coin } from '../interfaces/coin';


@Pipe({
  name: 'found'
})
export class FoundPipe implements PipeTransform {

  transform(value: Coin[], estado:number): Coin[] {
    if(estado == -1) return value
    else if (estado == 0) return value.filter(moneda => moneda.found == false)
    else return value.filter(moneda => moneda.found == true)
  }

}
