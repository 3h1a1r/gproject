import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MissingPersonsPage } from './missing-persons';

@NgModule({
  declarations: [
    MissingPersonsPage,
  ],
  imports: [
    IonicPageModule.forChild(MissingPersonsPage),
  ],
})
export class MissingPersonsPageModule {}
