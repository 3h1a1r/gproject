import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth} from 'angularfire2/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
email : String = '';
password : String = '';
  constructor(public fire: AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) {
  }

  Register(){
	  
	  this.fire.auth.createUserWithEmailAndPassword(this.email,
	  this.password).then(newUser => {
		  console.log("email:"+this.email+" password:"+this.password);
	  }).catch(function(error) {
 console.log(error)
  // var errorCode = error.code;
  // var errorMessage = error.message;

});
	  
	  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
