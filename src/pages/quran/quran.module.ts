import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuranPage } from './quran';
import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';

@NgModule({
  declarations: [
    QuranPage,
  ],
  imports: [
    IonicPageModule.forChild(QuranPage),
    IonicAudioModule.forRoot(defaultAudioProviderFactory),
  ]

})
export class QuranPageModule {}
