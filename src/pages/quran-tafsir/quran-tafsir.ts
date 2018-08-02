import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ViewController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';


/**
 * Generated class for the QuranTafsirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quran-tafsir',
  templateUrl: 'quran-tafsir.html',
})
export class QuranTafsirPage {
	tafsir: string;
	tafsir_header: string;
	loading : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restApiService: RestapiServiceProvider, public loadingCtrl: LoadingController, public viewCtrl: ViewController) {
  	this.loadingShow();
  	let surah = navParams.get('surah');
  	let ayat = navParams.get('ayat');
  	this.getTafsir(surah, ayat);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuranTafsirPage');
  }

  getTafsir(surah: number, ayat: number){
  	this.restApiService.getTafsir(surah,ayat)
    .then((data:any)=>{
    	this.tafsir = data.tafsir;
    	this.tafsir_header = data.tafsir_header;
    	this.loading.dismiss();
    })
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

   close() {
    this.viewCtrl.dismiss();
  }

}
