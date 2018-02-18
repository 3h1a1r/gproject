import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { EditPersonPage } from '../edit-person/edit-person';



 import { AngularFireObject  } from 'angularfire2/database';
 import { FirebaseListObservable } from 'angularfire2/database';



import { AngularFireDatabase ,AngularFireList ,AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import firebase from 'firebase';



/**
 * Generated class for the MissingPersonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-missing-persons',
  templateUrl: 'missing-persons.html',
})
export class MissingPersonsPage {

missingPersons : Observable<any>; 


//missingPersons : FirebaseListObservable<any>;
//missingPersons: AngularFireList<any>;
 // employees: Observable<any[]>;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,
   public db:  AngularFireDatabase) {
    
    this.missingPersons = db.list('missingPersons').valueChanges();
    
    
  }
  deleteMissing(id  ){
	  console.log('ID: Hadeel'+id);
    this.db.list('missingPersons').remove(this.db.list('missingPersons').valueOf(key));
	
  }
  editPerson(id : String , name : String){
	console.log(id,name);  
	this.navCtrl.push(EditPersonPage,{
		key : id,
	name: name} 
	);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissingPersonsPage');
  }
  goBack(){
  this.navCtrl.pop();
  }


}
