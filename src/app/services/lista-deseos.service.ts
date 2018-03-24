import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {
  lista: Lista[] = [];

  constructor() {

    let lista1 = new Lista('Compras de Supermercado');
    let lista2 = new Lista('Juegos de deseo');
    let lista3 = new Lista('Cosas de la universidad');


    this.lista.push(lista1);
    this.lista.push(lista2);
    this.lista.push(lista3);

    console.log("Servicio Inicializado")
   }
}
