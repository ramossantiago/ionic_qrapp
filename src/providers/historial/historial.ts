import { Injectable } from '@angular/core';
import { ScanData } from "../../models/scan.data.models";
import { ModalController } from "ionic-angular";
import { MapaPage } from "../../pages/mapa/mapa";

//plugins
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class HistorialProvider {

  private _historial:ScanData[] = [];

  constructor(private iab: InAppBrowser, private modalCrtl:ModalController) {
  }

  agregarHistorial(texto:string) {
    let data = new ScanData(texto);
    this._historial.unshift(data);
    console.log(this._historial);
    this.abrir_scan(0);
    
  }

  abrir_scan(index:number){
    let scanData = this._historial[index];
    console.log(scanData);
    
    switch (scanData.tipo) {
      case "http":
        this.iab.create(scanData.info, "_system");
        break;
      case "mapa":
        this.modalCrtl.create(MapaPage, {coords: scanData.info}).present();
        break
      default:
        console.error("No soportado");
    }
  }

  cargarHistorial() {
    return this._historial;
  }



}
