import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { HistorialProvider } from '../../providers/historial/historial'
import { ScanData } from "../../models/scan.data.models";

@IonicPage()
@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  historial:ScanData[] = [];

  constructor(private _historialProvider:HistorialProvider) { }
  
  ionViewDidLoad() {
    this.historial = this._historialProvider.cargarHistorial();
  }

  abrirScan(index:number){
    this._historialProvider.abrir_scan(index);
  }

}
