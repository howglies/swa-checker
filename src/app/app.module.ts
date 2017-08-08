import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FlightCreatePage } from '../pages/flight-create/flight-create';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import the AF2 Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// AF2 Settings
export const firebaseConfig =
{
  apiKey: "AIzaSyDElG4PUGAs9hSyOMgXo8-hIbEcfhyv_YI",
  authDomain: "swa-checker.firebaseapp.com",
  databaseURL: "https://swa-checker.firebaseio.com",
  projectId: "swa-checker",
  storageBucket: "",
  messagingSenderId: "1097332313205"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FlightCreatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FlightCreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
