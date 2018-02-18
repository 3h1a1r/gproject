import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

import { AngularFireAuth} from 'angularfire2/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
email : String = '';
password : String = '';
  constructor(public fire: AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
	  
	  this.fire.auth.signInWithEmailAndPassword(this.email, this.password)
	  .then(newUser => {
		  console.log("email:"+this.email+" password:"+this.password);
		  this.navCtrl.push(HomePage);
	  }).catch(function(error) {
 console.log(error)
  // var errorCode = error.code;
  // var errorMessage = error.message;

});
	  console.log("email:"+this.email+" password:"+this.password);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
