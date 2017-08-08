import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FlightCreatePage } from "../flight-create/flight-create";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  addFlight(){
     this.navCtrl.push(FlightCreatePage)
 
  }
}
