import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuranSearchPage } from './quran-search';

@NgModule({
  declarations: [
    QuranSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(QuranSearchPage),
  ],
})
export class QuranSearchPageModule {}
