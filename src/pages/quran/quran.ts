import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,PopoverController,LoadingController, ViewController} from 'ionic-angular';
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
  surah : String;
  juz : Number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController, public popOverCtrl:PopoverController, public restApiService:RestapiServiceProvider, public loadingCtrl: LoadingController, viewCtrl: ViewController) {
    
    let page = this.navParams.get('page');
    let juz = this.navParams.get('juz');
    page = typeof page == 'undefined'?1:page;
    juz = typeof juz == 'undefined'?'undefined':juz;

    console.log('in');
    this.loadingShow();
    // show juz page if juz is not empty
    if(juz!='undefined'){
      this.getJuz(juz);
    }else{
      this.getPages(page);
    }
    
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
    .then((data:any)=>{
      if (Object.keys(data).length > 0){
        this.ayats = data.ayats;
        this.nextPage = data.next_page;
        this.prevPage = data.prev_page;
        this.surah = data.surah;
        this.juz = data.juz;
        this.currPage = data.curr_page;
      }
      console.log(data);
      this.loading.dismiss();
    })
  }

  getJuz(juz: number){
    this.restApiService.getAyatJuz(juz)
    .then((data:any)=>{
      if (Object.keys(data).length > 0){
        this.ayats = data.ayats;
        this.nextPage = data.next_page;
        this.prevPage = data.prev_page;
        this.surah = data.surah;
        this.juz = data.juz;
        this.currPage = data.curr_page;
      }
      console.log(data);
      this.loading.dismiss();
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
          Getting data...
        </div>`
    });

    this.loading.present();
  }
}
