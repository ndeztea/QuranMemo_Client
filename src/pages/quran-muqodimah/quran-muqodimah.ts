import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ViewController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';


/**
 * Generated class for the QuranMuqodimahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quran-muqodimah',
  templateUrl: 'quran-muqodimah.html',
})
export class QuranMuqodimahPage {
  loading : any;
  surah: any;
  muqodimah: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restApiService:RestapiServiceProvider,public loadingCtrl: LoadingController,public viewCtrl: ViewController) {
  	this.loadingShow();
  	let surah = navParams.get('surah');
  	this.getMuqadimah(surah);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuranMuqodimahPage');
  }

  getMuqadimah(surah: number){
    this.restApiService.getMuqodimah(surah)
    .then((data:any)=>{
      if (Object.keys(data).length > 0){
        this.surah = data.surah;
        this.muqodimah = data.muqodimah;
      }
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
