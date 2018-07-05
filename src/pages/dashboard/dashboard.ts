import { Component,ViewChild } from '@angular/core';
import { IonicPage,Nav, NavController,ModalController,PopoverController,ViewController } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public popOverCtrl: PopoverController,public viewCtrl: ViewController ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  memozNew(){
  	let modal = this.modalCtrl.create('MemozNewPage'); 
  	modal.present()
  }

  memozList(){
    let modal = this.modalCtrl.create('MemozListPage'); 
    modal.present()
  }

  notificationsPage(){
    let modal = this.modalCtrl.create('NotificationsPage'); 
    modal.present()
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
