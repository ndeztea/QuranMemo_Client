import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuranTafsirPage } from './quran-tafsir';

@NgModule({
  declarations: [
    QuranTafsirPage,
  ],
  imports: [
    IonicPageModule.forChild(QuranTafsirPage),
  ],
})
export class QuranTafsirPageModule {}
