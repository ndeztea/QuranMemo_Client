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
  currPage : number;
  nextPage : number;
  prevPage : number;
  surah : String;
  juz : number;
  range_ayat: string;
  show_range_ayat: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController, public popOverCtrl:PopoverController, public restApiService:RestapiServiceProvider, public loadingCtrl: LoadingController, viewCtrl: ViewController) {
    
    let page = this.navParams.get('page');
    let juz = this.navParams.get('juz');
    let surah = this.navParams.get('surah');
    let ayat_start = this.navParams.get('ayat_start');
    let ayat_end = this.navParams.get('ayat_end');

    page = typeof page == 'undefined'?1:page;
    juz = typeof juz == 'undefined'?'undefined':juz;
    surah = typeof surah == 'undefined'?'undefined':surah;

    console.log('in');
    this.loadingShow();
    // show juz page if juz is not empty
    if(juz!='undefined'){
      this.getJuz(juz);
    }else if(surah!='undefined'){
      this.getRangeAyat(surah,ayat_start+'-'+ayat_end);
    }else{
      this.getPages(page);
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuranPage');
  }

  openModal(page, parameter:any){
    let modal = this.modalCtrl.create(page,parameter); 
    modal.present()
  }
  
  openPopOver(page){
    let popOver = this.popOverCtrl.create(page); 
    popOver.present()
  }

  getPages(page: number){
    this.show_range_ayat = false;
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
      this.loading.dismiss();
    })
  }

  getRangeAyat(surah: number, ayat: string){
    this.show_range_ayat = true;
    this.restApiService.getRangeAyat(surah, ayat)
    .then((data:any)=>{
      if (Object.keys(data).length > 0){
        this.ayats = data.ayats;
        this.surah = data.surah;
        this.range_ayat = data.ayat;
        console.log(data);
      }
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
