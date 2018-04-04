import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent} from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.components.html'
})
export class pendientesComponent implements OnInit {
  constructor(private _listaDeseos: ListaDeseosService,
              public _navController: NavController) {
    }

  ngOnInit() {}

  irAgregar(){
    this._navController.push( AgregarComponent );
  }

  verDetalle(lista, idx){
    this._navController.push( DetalleComponent, {lista,idx} );
  }
}
