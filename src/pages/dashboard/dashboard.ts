import { Component,ViewChild } from '@angular/core';
import { IonicPage,Nav, NavController,ModalController,PopoverController,ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  bookmarkedPage: number;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public popOverCtrl: PopoverController,public viewCtrl: ViewController, public storage:Storage ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.storage.get('bookmarkPage').then((val) => {
      this.bookmarkedPage = val;
    });
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

  goToBookmarked(page){
    this.navCtrl.push('QuranPage',
      {
        page: page
      });
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
