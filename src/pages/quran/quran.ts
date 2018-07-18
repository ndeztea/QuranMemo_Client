import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,PopoverController,LoadingController} from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';

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

  ayats : any;
  loading : any;
  pagination: any;
  ayat : any;
  currPage : Number;
  nextPage : Number;
  prevPage : Number;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController, public popOverCtrl:PopoverController, public restApiService:RestapiServiceProvider, public loadingCtrl: LoadingController) {
    
    let page = this.navParams.get('page');
    page = typeof page == 'undefined'?1:page;
    console.log('in');
    this.loadingShow();
    this.getPages(page);
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

  getPages(page: number){
    
    this.restApiService.getAyats(page)
    .then(data=>{
      this.ayats = data.ayats;
      this.currPage = parseInt(data.curr_page);
      this.nextPage = this.currPage + 1;
      this.prevPage = this.currPage - 1;

      this.loading.dismiss();
      console.log(this.currPage);
    })
  }

  goToPage(page){
    this.navCtrl.push('QuranPage',
      {
        page: page
      });
  }

  

  loadingShow() {
    this.loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: `
        <div class="custom-spinner-container">
          Get data...
        </div>`
    });

    this.loading.present();
  }
}
