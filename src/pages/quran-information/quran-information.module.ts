import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuranInformationPage } from './quran-information';

@NgModule({
  declarations: [
    QuranInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(QuranInformationPage),
  ],
})
export class QuranInformationPageModule {}
