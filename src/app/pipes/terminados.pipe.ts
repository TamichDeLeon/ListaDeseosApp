import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/index';

@Pipe({
  name: 'terminados',
  pure: false
})
export class terminadosPipe implements PipeTransform {
  transform(datos:Lista[], estado:boolean = true): Lista[] {

    let listaTerminada:Lista[] = [];

    for(let lista of datos ){

      if (lista.terminada == estado) {
          listaTerminada.push( lista );
      }

    }

    return listaTerminada;
  }
}
