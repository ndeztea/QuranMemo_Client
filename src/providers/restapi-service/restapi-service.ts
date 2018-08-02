import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';


/*
  Generated class for the RestapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestapiServiceProvider {
	//apiURL: String = 'http://dev.quranmemo.com/public'
	apiURL: string = 'http://localhost:8888/QuranMemo/public';
	juz: any;
	file: any;
	dataOri : string;

	constructor(public http: HttpClient) {
		this.file = new File();
		console.log('Hello RestapiServiceProvider Provider');
	}

	getAyats(page: number){
		let data =  this.execRestAPI(this.apiURL+'/mushaf/page/'+page+'?restAPI=JSON');
		//let fileName = page+'.json';
		// create file for cache
		//this.file.writeFile('assets/data/',fileName,this.dataOri);
		return data;
	}

	getAyatJuz(juz: number){
		return this.execRestAPI(this.apiURL+'/mushaf/juz/'+juz+'?restAPI=JSON');
	}

	getJuz(){
		return this.execRestAPI('assets/data/juz.json');
	}

	getSurah(){
		return this.execRestAPI('assets/data/surah.json');
	}

	getMuqodimah(surah){
		return this.execRestAPI(this.apiURL+'/mushaf/muqodimah/'+surah+'?restAPI=JSON');
	}

	getTafsir(surah,ayat){
		return this.execRestAPI(this.apiURL+'/mushaf/tafsir/'+surah+'/'+ayat+'?restAPI=JSON');
	}

	getRangeAyat(surah: number, ayat: string){
		return this.execRestAPI(this.apiURL+'/mushaf/surah/'+surah+'/'+ayat+'?restAPI=JSON');
	}

	getSearchByKeyword(key: string,page: number){
		var pageParameter = '';
		if(page>0){
			pageParameter = '&page='+page;
		}
		return this.execRestAPI(this.apiURL+'/mushaf/searchKeyword?keyword='+key+pageParameter+'&restAPI=JSON'); 
	}

	execRestAPI(linkUrl: string){
		return new Promise(resolve => {
		    this.http.get<any>(linkUrl).subscribe((data: any) => {
		       this.dataOri = data;
		       resolve(data);
		    }, err => {
		      console.log(err);
		    });
		});
	}

}
