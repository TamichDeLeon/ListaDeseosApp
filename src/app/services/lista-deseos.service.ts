import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {
  lista: Lista[] = [];

  constructor() {

    // let lista1 = new Lista('Compras de Supermercado');
    // let lista2 = new Lista('Juegos de deseo');
    // let lista3 = new Lista('Cosas de la universidad');


    // this.lista.push(lista1);
    // this.lista.push(lista2);
    // this.lista.push(lista3);
    // console.log(this.lista)
    this.cargarData();
    console.log("Servicio Inicializado")
   }

   actualizarData(){
     localStorage.setItem("data", JSON.stringify(this.lista));
   }

   cargarData(){
     if (localStorage.getItem("data")) {
         this.lista = JSON.parse(localStorage.getItem("data"));
     }

   }

   agregarLista(lista:Lista){
     this.lista.push(lista);
     this.actualizarData();
   }

   eliminarLista(idx:number){
     this.lista.splice(idx,1);
     this.actualizarData();
   }

}
