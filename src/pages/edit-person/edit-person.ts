import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

//, FirebaseListObservable

/**
 * Generated class for the EditPersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-person',
  templateUrl: 'edit-person.html',
})
export class EditPersonPage {

  personsList : FirebaseListObservable<any>;
  person = {
	  id: '',
	  name: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams
  , public db : AngularFireDatabase) {
	  this.personsList = db.list('/missingPersons');
	  this.person.id = this.navParams.get('key');
	  this.person.name = this.navParams.get('name');
  }
  
  updateMissingOne(id,name){
	  this.personsList.update(this.person.id, {
		 name : this.person.name 
	  }).then(updatedPerson =>
	  {this.navCtrl.pop();},
	  error =>  {console.log(error);});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPersonPage');
  }

}
