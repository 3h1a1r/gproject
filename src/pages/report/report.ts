import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { MissingPersonsPage } from '../missing-persons/missing-persons';


import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { AngularFireModule } from 'angularfire2';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

missingList : FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public db : AngularFireDatabase) {
    this.missingList = db.list('missingPersons');
  }

    repoertMissingOne(name){ 
    this.missingList.push({
    name : name
    }).then(newMissing => { 
    this.navCtrl.push(MissingPersonsPage);
    },error=> {console.log(error)});
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }
  
  goBack(){
  this.navCtrl.pop();
  }
  clear(){
  
  }

}
