import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { pendientesComponent } from '../pages/pendientes/pendientes.components';
import { terminadosComponent } from '../pages/teminados/terminados.component';
import { AgregarComponent } from '../pages/agregar/agregar.component';
import { DetalleComponent } from '../pages/detalle/detalle.component';
//Servicio
import { ListaDeseosService } from '../app/services/lista-deseos.service';

//Pipe
import { PlaceHolderPipe } from './pipes/placeholder.pipe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    pendientesComponent,
    terminadosComponent,
    AgregarComponent,
    PlaceHolderPipe,
    DetalleComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    pendientesComponent,
    terminadosComponent,
    AgregarComponent,
    DetalleComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaDeseosService
  ]
})
export class AppModule {}
