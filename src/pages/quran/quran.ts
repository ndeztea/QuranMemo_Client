import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,PopoverController } from 'ionic-angular';

/**
 * Generated class for the QuranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quran',
  templateUrl: 'quran.html',
})
export class QuranPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController, public popOverCtrl:PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuranPage');
  }

  openModal(page){
    let modal = this.modalCtrl.create(page); 
    modal.present()
  }
  
  openPopOver(page){
    let popOver = this.popOverCtrl.create(page); 
    popOver.present()
  }
}
