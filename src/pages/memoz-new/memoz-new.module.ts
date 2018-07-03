import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemozNewPage } from './memoz-new';

@NgModule({
  declarations: [
    MemozNewPage,
  ],
  imports: [
    IonicPageModule.forChild(MemozNewPage),
  ],
})
export class MemozNewPageModule {}
