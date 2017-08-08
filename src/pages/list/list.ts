import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FlightCreatePage } from "../flight-create/flight-create";
import {osmosis} from 'osmosis';  

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  flights: FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public af:AngularFireDatabase) {
   this.flights = af.list('/flights');
  }

    addFlight(){
      this.navCtrl.push(FlightCreatePage)
    }
    parsePrice = (fareType, price) => {
      if (fareType === 'DOLLARS') {
        const matches = price.toString().match(/\$.*?(\d+)/)
        return parseInt(matches[1])
      } else {
        const matches = price.text().split(',').join('')
        return parseInt(matches)
     }
    }


    getPrices(){
      // one way trip
      //const outboundDate = moment(flightConfig.outboundDate, 'MM-DD-YYYY')
      /*if (moment().isAfter(outboundDate)) {
      // we are past the day of this outbound date so drop this trip from future checks
      //rewriteYamlConfig = true
      logger.info('Removing ' + JSON.stringify(flightConfig) + ' from future checks because it is past ' + flightConfig.outboundDate)
      cb()
    } else {*/
      const outboundFares = []
      //const fareType = flightConfig.fareType ? flightConfig.fareType.toUpperCase() : 'DOLLARS']
      const originAirport = 'SAN';
      const destinationAirport = 'SFO';
      const outboundDate = '8/26/2017';
      const adultPassengerCount = '1';
      const fareType = 'POINTS';
      const outboundFlightNumber = 4335;

      console.log('Checking Southwest for one-way prices with parameters:\n' +
        'originAirport: ' + originAirport + '\n' +
        'destinationAirport: ' + destinationAirport + '\n' +
        'outboundDateString: ' + outboundDate + '\n' +
        'adultPassengerCount: ' + adultPassengerCount + '\n' +
        'fareType: ' + fareType + '\n' +
        'outboundFlightNumber: ' + outboundFlightNumber);

      osmosis
        .get('https://www.southwest.com')
        .submit('.booking-form--form', {
          twoWayTrip: false,
          airTranRedirect: '',
          returnAirport: '',
          outboundTimeOfDay: 'ANYTIME',
          returnTimeOfDay: 'ANYTIME',
          seniorPassengerCount: 0,
          fareType: fareType,
          originAirport: originAirport,
          destinationAirport: destinationAirport,
          outboundDateString: outboundDate,
          returnDateString: '',
          adultPassengerCount: adultPassengerCount
        });
        /*
        .set({
          out: [
            osmosis
            .find("table[@id='faresOutbound']/tbody/tr, table[@id='b0Table']/tbody/tr")
            .then((outboundData) => {
              const flights = outboundData.find('.js-flight-performance, .nativeTooltip.wdk-tooltip')

              // Loop through all the outbound flights and find the flight number
              // we are interested in
              for (let flight of flights) {
                const matches = flight.text().match(/\d+/)
                const flightNumber = matches[0]

                // we found the right flight number row - parse the prices for this row
                if (parseInt(flightNumber) === outboundFlightNumber) {
                  const prices = outboundData.find('.product_price, span.var.h5')
                  for (let rawPrice of prices) {
                    const price = this.parsePrice(fareType, rawPrice)

                    console.debug('Found price ' + price + ' for outbound flight ' + outboundFlightNumber + ' on ' + outboundDate)
                    outboundFares.push(price)
                  }
                }
              }
            })
          ]
        })
        .done(() => {
          //const outboundPrice = parseInt(outboundPrice)
          const lowestOutboundFare = Math.min(...outboundFares)
          if (lowestOutboundFare === Infinity) {
            console.error('Not able to determine lowest outbound fare! Has site HTML changed?')
          }
          console.debug('Lowest outbound price for flight number ' + outboundFlightNumber + ' is ' + lowestOutboundFare)
          //console.debug('Notification threshold outbound price for flight ' + outboundFlightNumber + ' is ' + outboundPrice)
          */
          
          /*
          if (lowestOutboundFare < outboundPrice) {
            const message = 'Price Drop: Outbound flight #' + outboundFlightNumber + ' ' +
              originAirport + '->' + destinationAirport +
              ' on ' + outboundDate +
              ' is now ' + lowestOutboundFare + ' (was ' +
              outboundPrice + ')';

              console.log(message);

            // update fare price in config
            //flightConfig.outboundPrice = lowestOutboundFare
            // flag to indicate we need to re-write yaml config
            //rewriteYamlConfig = true
          }

          //updatedFlights.push(flightConfig)
          //cb()
          */
    //})
    }



    showFlight(flightId){
      /* TODO: Add logic here */ 
    }
  }