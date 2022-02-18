import { Pipe, PipeTransform } from '@angular/core';
import { Coin } from '../interfaces/coin';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Coin[], busqueda: string): Coin[] {
    if (busqueda == "" ) return value
    else {
      return value.filter(moneda => (moneda.year + "").includes(busqueda))
    }
  }

}
