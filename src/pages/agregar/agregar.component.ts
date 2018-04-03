import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista: string = "";
  nombreItem: string = "";

  items:ListaItem[] = [];

  constructor( public _alertCtrl:AlertController,
                public _navCtrl:NavController,
                public _listaDeseos:ListaDeseosService) {  }

  ngOnInit() {}

  agregar(){

    if (this.nombreItem.length == 0) {
        return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push(item);

    this.nombreItem = "";
  }

  borrarItem(i:any){
    if (i >= 0) {
      this.items.splice(i,1);
    }

  }

  guardarLista(){
    if (this.nombreLista.length == 0) {
      let alert = this._alertCtrl.create({
        title: 'Nombre de Lista',
        subTitle: 'El nombre de la lista es obligatorio',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let lista = new Lista(this.nombreLista);
    lista.items = this.items;

    //this._listaDeseos.lista.push(lista);
    this._listaDeseos.agregarLista(lista);
    this._navCtrl.pop();

  }
}
