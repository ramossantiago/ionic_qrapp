import { Injectable } from '@angular/core';
import { ScanData } from "../../models/scan.data.models";
//plugins
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class HistorialProvider {

  private _historial:ScanData[] = [];

  constructor(private iab: InAppBrowser) {
  }

  agregarHistorial(texto:string) {
    let data = new ScanData(texto);
    this._historial.unshift(data);
    console.log(this._historial);
    
  }

  abrir_scan(index:number){
    let scanData = this._historial[index];
    console.log(scanData);
    
    switch (scanData.tipo) {
      case "http":
        this.iab.create(scanData.info, "_system");
        break;
      default:
        console.error("No soportado");
    }
  }

  cargarHistorial() {
    return this._historial;
  }



}
