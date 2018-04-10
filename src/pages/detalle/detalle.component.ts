import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';


@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  lista:Lista;
  idx:number;

  constructor( public _navController:NavController,
                public _navPrm:NavParams,
                public _listaDeseos:ListaDeseosService,
                public _alertCtrl:AlertController ) {

      this.idx = this._navPrm.get("idx");
      this.lista = this._navPrm.get("lista");
                 }


  ngOnInit() {}

  actualizar(item:ListaItem){
    item.completado = !item.completado;

    let todosMarcados = true;
    for (let items of this.lista.items) {
        if (!items.completado) {
            todosMarcados = false;
            break;
        }
    }
    this.lista.terminada = todosMarcados;

    this._listaDeseos.actualizarData();
  }

  borrarItem(){
    let confirm = this._alertCtrl.create({
    title: 'Borrar Lista',
    message: 'Desea Borrar la Lista '+this.lista.nombre+' idx '+this.idx+'?',
    buttons: [
          {
            text: 'Cancelar'
          },
          {
            text: 'Borrar',
            handler: () => {
            this._listaDeseos.eliminarLista(this.idx);
            this._navController.pop();
            }
          }
    ]
    });
    confirm.present();
  }
}
