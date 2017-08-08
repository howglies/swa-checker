import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as osmosis from "osmosis";
/**
 * Generated class for the FlightCreatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-flight-create',
  templateUrl: 'flight-create.html',
})
export class FlightCreatePage {
flights: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af:AngularFireDatabase) {
  this.flights = af.list('/flights');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightCreatePage');
  }

  createFlight(departure_airport, destination_airport, flight_number, flight_date, payment_method, payment_amount){
    this.flights.push({
      departure_airport:departure_airport,
      destination_airport:destination_airport,
      flight_number:flight_number,
      flight_date:flight_date,
      payment_method:payment_method,
      payment_amount:payment_amount,
      current_price: payment_amount
    }).then( newFlight=>{
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    }
    );
  }

}
