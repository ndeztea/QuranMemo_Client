import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

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
  juz: any[] = [
    { juz: 'الف لام میم', juz_latin: 'Alif-Lam-Mim', number: '1',number_arabic:'١' },
    { juz: 'سيقول السفهاء', juz_latin: 'Sayaqul', number: '2',number_arabic:'٢' },
    { juz: 'تلك الرسل', juz_latin: 'Tilka -r-rusul', number: '3',number_arabic:'٣' },
    { juz: 'لن تنالوا البر', juz_latin: 'Lan Tana Lu', number: '4',number_arabic:'٤' },
    { juz: 'والمحصنات', juz_latin: 'W-al-muḥṣanāt', number: '5',number_arabic:'٥' },
    { juz: 'لا يحب الله', juz_latin: 'Lā yuẖibbu-llāh', number: '6',number_arabic:'٦' },
    { juz: 'وإذا سمعو', juz_latin: ' Wa ʾidha samiʿū', number: '7',number_arabic:'٧' },
    { juz: 'ولو أننا نزلنا', juz_latin: 'Wa law ʾannanā', number: '8',number_arabic:'٨' },
    { juz: 'قال الملأ', juz_latin: 'Qāl al-malāʾ', number: '9',number_arabic:'٩' },
    { juz: 'واعلموا', juz_latin: 'W-aʿlamū', number: '10',number_arabic:'١٠' },
    { juz: 'يعتذرون', juz_latin: 'Yaʾtadhirūna', number: '11',number_arabic:'١١' },
    { juz: 'ومامن دابة', juz_latin: 'Wa mā min dābbah', number: '12',number_arabic:'١٢' },
    { juz: 'وما أبرئ نفسي', juz_latin: 'Wa mā ʾubarriʾu', number: '13',number_arabic:'١٣' },
    { juz: 'رُّبَمَا', juz_latin: 'Ruba Maʾ', number: '14',number_arabic:'١٤' },
    { juz: 'سبحان', juz_latin: 'Subḥāna -lladhi', number: '15',number_arabic:'١٥' },
    { juz: 'قال ألم', juz_latin: 'Qāla ʾa-lam', number: '16',number_arabic:'١٦' },
    { juz: 'اقترب للناس', juz_latin: 'Aqtaraba li-n-nās', number: '17',number_arabic:'١٧' },
    { juz: 'قد أفلح', juz_latin: ' Qad ʾaflaḥa', number: '18',number_arabic:'١٨' },
    { juz: 'وقال الذين لا يرجون', juz_latin: 'Wa-qāla -lladhīna', number: '19',number_arabic:'١٩' },
    { juz: 'أَمَّنْ خَلَقَ', juz_latin: 'Am-man khalaq', number: '20',number_arabic:'٢٠' },
    { juz: 'ولا تجادلوا', juz_latin: 'Wa laa-tujaa-dilu ', number: '21',number_arabic:'٢١' },
    { juz: 'ومن يقنت', juz_latin: 'Wa-man yaqnut', number: '22',number_arabic:'٢٢' },
    { juz: 'وما أنزلنا', juz_latin: 'Wa-maa-an-jalnaa', number: '23',number_arabic:'٢٣' },
    { juz: 'فمن أظلم', juz_latin: 'Fa-man ʾaẓlamu', number: '24',number_arabic:'٢٤' },
    { juz: 'إليه يرد', juz_latin: 'ʾIlaihi yuraddu', number: '25',number_arabic:'٢٥' },
    { juz: 'حمٓ', juz_latin: 'Ḥāʾ Mīm', number: '26',number_arabic:'٢٦' },
    { juz: 'قال فما خطبكم', juz_latin: 'Qāla fa-mā khatbukum', number: '27',number_arabic:'٢٧' },
    { juz: 'قد سمع', juz_latin: 'Qad samiʿa -llāhu', number: '28',number_arabic:'٢٨' },
    { juz: 'تبارك', juz_latin: 'Tabāraka -lladhi', number: '29',number_arabic:'٢٩' },
    { juz: 'عمّ', juz_latin: 'ʿAmma', number: '30',number_arabic:'٣٠' }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    
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
