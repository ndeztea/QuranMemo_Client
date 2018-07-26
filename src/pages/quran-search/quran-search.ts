import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
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
  surah: any;
  todo: any;
  result: any;
  show_loading: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public restApiService:RestapiServiceProvider,public formBuilder: FormBuilder) {
    this.restApiService.getJuz()
    .then((data:any)=>{
      this.juz = data;
      console.log(data);
    })

    this.restApiService.getSurah()
    .then((data:any)=>{
      this.surah = data;
      console.log(data);
    })

    this.todo = this.formBuilder.group({
      ayat_start: ['', Validators.required],
      ayat_end: [''],
      surah: ['']
    });
    
  }

  ionViewDidLoad() {
    this.search = "keyword";
    console.log('ionViewDidLoad QuranSearchPage');
  }

  goToJuz(juz){
    this.navCtrl.push('QuranPage',
      {
        juz: juz
      });
  }

  submitForm(){
    this.navCtrl.push('QuranPage',this.todo.value);
  }

  searchKeyword(key: string){
    this.show_loading = true;
    this.restApiService.getSearchByKeyword(key.target.value)
    .then((data:any)=>{
      this.search_result = data.search_result;
      this.search_count = data.search_count;
      console.log(data);
      this.show_loading = false;
    })
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
