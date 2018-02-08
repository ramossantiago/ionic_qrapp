import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  lat: number;
  lng: number;

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController) {

    let coordArray = this.navParams.get("coords").split(",");
    this.lat = Number( coordArray[0].replace("geo:", "") );
    this.lng = Number( coordArray[1] );

    console.log(this.lat, this.lng);
    
    

  }

  cerrarModal() {
    this.viewCtrl.dismiss();
  }

}
