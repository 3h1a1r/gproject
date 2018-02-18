import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ReportPage } from '../report/report';
import { MissingPersonsPage } from '../missing-persons/missing-persons';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToReportPage(){
  this.navCtrl.push(ReportPage);
  }
  goToMissingPersonsPage(){
  this.navCtrl.push(MissingPersonsPage);
  }
  goToLoginPage(){
	  this.navCtrl.push(LoginPage)
  }
  goToRegisterPage(){
	  this.navCtrl.push(RegisterPage)
  }
  goToLogoutPage(){
	  
  }

}
