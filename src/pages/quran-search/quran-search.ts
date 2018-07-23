import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';

/**
 * Generated class for the QuranSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quran-search',
  templateUrl: 'quran-search.html',
})
export class QuranSearchPage {
  search: string;
  juz: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public restApiService:RestapiServiceProvider) {
    this.restApiService.getJuz()
    .then((data:any)=>{
      this.juz = data;
      console.log(data);
    })
    
  }

  ionViewDidLoad() {
    this.search = "surah";
    console.log('ionViewDidLoad QuranSearchPage');
  }

  goToJuz(juz){
    this.navCtrl.push('QuranPage',
      {
        juz: juz
      });
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
