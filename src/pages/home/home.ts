import { Component } from '@angular/core';
// componentes
import { ToastController, Platform } from 'ionic-angular';
//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// services
import { HistorialProvider } from "../../providers/historial/historial";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              private platform: Platform,
              private historialServices: HistorialProvider
              ) {

  }

  scan() {
    console.log("Escaneando");

    if (!this.platform.is('cordova')){
      this.historialServices.agregarHistorial("http:www.google.com");
      return;
    }

    this.barcodeScanner.scan().then((barcodeData) => {
      console.log("Result: " , barcodeData.text);
      console.log("Format: " + barcodeData.format);
      console.log("Cancelled: " + barcodeData.cancelled);

      if (!barcodeData.cancelled && barcodeData.text != null) {
        this.historialServices.agregarHistorial(barcodeData.text);
      }

     }, (err) => {
         console.error("Error: ", err);
         this.mostrarError("Error: " + err);
     });
  }

  mostrarError(mensaje:string) {
      let toast = this.toastCtrl.create({
        message: mensaje,
        duration: 1500
      });
      toast.present();
  }

}
