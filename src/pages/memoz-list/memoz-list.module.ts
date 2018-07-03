import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemozListPage } from './memoz-list';

@NgModule({
  declarations: [
    MemozListPage,
  ],
  imports: [
    IonicPageModule.forChild(MemozListPage),
  ],
})
export class MemozListPageModule {}
