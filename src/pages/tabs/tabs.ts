import { Component } from '@angular/core';

import { pendientesComponent } from '../pendientes/pendientes.components';
import { terminadosComponent } from '../teminados/terminados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root:any = pendientesComponent;
  tab2Root:any = terminadosComponent;

  constructor() {

  }
}
