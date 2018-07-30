import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ToastController } from 'ionic-angular';
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
  search_result: Array<String> = [];
  search_count: number;
  search_count: number;
  page: any;
  show_loading: boolean;
  keyword: string;
  page: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public restApiService:RestapiServiceProvider,public formBuilder: FormBuilder, public toastCtrl: ToastController) {
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

  cancelSearch(){
    this.show_loading = false;
    console.log('cancel');
  }

  searchKeyword(infinityScroll: any, page: number){
    console.log(this.keyword)
    if(this.keyword!=''){
      this.show_loading = true;
      this.restApiService.getSearchByKeyword(this.keyword,page)
      .then((data:any)=>{
          if(data.search_result==0){
            let toast = this.toastCtrl.create({
              message: "Search result is empty",
              duration: 3000,
              position: 'top'
            });
          toast.present();
          this.show_loading = false;
          return false;
        }
        for (var i = 0; i < data.search_result.length; i++) {
          this.search_result.push( data.search_result[i] );
        }
        
        this.search_count = data.search_count;
        this.page = data.page;
        this.show_loading = false;
        if(infinityScroll!=''){
          infinityScroll.complete();
        }

      })
    }
    
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
