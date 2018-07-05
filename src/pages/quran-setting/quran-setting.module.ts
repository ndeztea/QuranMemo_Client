import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuranSettingPage } from './quran-setting';

@NgModule({
  declarations: [
    QuranSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(QuranSettingPage),
  ],
})
export class QuranSettingPageModule {}
