import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ReportPage } from '../pages/report/report';
import { MissingPersonsPage } from '../pages/missing-persons/missing-persons';
import { EditPersonPage } from '../pages/edit-person/edit-person';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase} from 'angularfire2/database';
import { FirebaseListObservable} from 'angularfire2/database-deprecated';
 

import { AngularFireAuth } from 'angularfire2/auth';

//firebase angular 4
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFirestore  } from 'angularfire2/firestore';

const config = {
    apiKey: "AIzaSyA8W7eA9sBNw2TcedS6ZtsSF_e4bwTbZqw",
    authDomain: "myapp-94239.firebaseapp.com",
    databaseURL: "https://myapp-94239.firebaseio.com",
    projectId: "myapp-94239",
    storageBucket: "myapp-94239.appspot.com",
    messagingSenderId: "635418077022"
  };

@NgModule({
  declarations: [
  // AppComponent ,
     // ConfirmComponent,
    MyApp,
    HomePage,
    ReportPage,
    MissingPersonsPage,
    ContactPage,
	EditPersonPage,
	LoginPage,
	RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
     AngularFireDatabaseModule,                
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ReportPage,
    MissingPersonsPage,
    ContactPage,
	EditPersonPage,
	LoginPage,
	RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	AngularFireDatabase ,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
