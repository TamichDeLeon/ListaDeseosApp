import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalleComponent } from '../detalle/detalle.component';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html'
})
export class terminadosComponent implements OnInit {
  constructor(public _navController:NavController,
              public _listaDeseos:ListaDeseosService) {  }

  ngOnInit() {}

  verDetalle(lista, i){
    this._navController.push( DetalleComponent,{lista, i});
  }
}
