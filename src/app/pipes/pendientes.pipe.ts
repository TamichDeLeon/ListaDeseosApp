import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/index';

@Pipe({
  name: 'pendientes',
  pure: false
})
export class pendientesPipe implements PipeTransform {
  transform(datos:Lista[], estado:boolean = false): Lista[] {

    let listaPendiente:Lista[] = [];

    for(let lista of datos ){

      if (lista.terminada == estado) {
          listaPendiente.push( lista );
      }

    }

    return listaPendiente;
  }
}
