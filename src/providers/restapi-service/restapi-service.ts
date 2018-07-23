import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestapiServiceProvider {
	//apiURL: String = 'http://dev.quranmemo.com/public'
	apiURL: String = 'http://localhost:8888/QuranMemo/public';
	juz: any;

	constructor(public http: HttpClient) {
		console.log('Hello RestapiServiceProvider Provider');
	}

	getAyats(page: number){
		return new Promise(resolve => {
		    this.http.get<any>(this.apiURL+'/mushaf/page/'+page+'?restAPI=JSON').subscribe((data: any) => {
		      resolve(data);
		    }, err => {
		      console.log(err);
		    });
		});
	}

	getAyatJuz(juz: number){
		return new Promise(resolve => {
		    this.http.get<any>(this.apiURL+'/mushaf/juz/'+juz+'?restAPI=JSON').subscribe((data: any) => {
		      resolve(data);
		    }, err => {
		      console.log(err);
		    });
		});
	}

	getJuz(){
		return new Promise(resolve => {
		    this.http.get<any>('assets/data/juz.json').subscribe((data: any) => {
		      resolve(data);
		    }, err => {
		      console.log(err);
		    });
		});
	}

}
