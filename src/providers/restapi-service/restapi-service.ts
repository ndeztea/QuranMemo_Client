import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestapiServiceProvider {
	apiURL: String = 'http://localhost:8888/QuranMemo/public'

	constructor(public http: HttpClient) {
		console.log('Hello RestapiServiceProvider Provider');
	}

	getAyats(page: number){
		console.log(this.apiURL+'/mushaf/page/'+page+'?restAPI=JSON');
		return new Promise(resolve => {
		    this.http.get(this.apiURL+'/mushaf/page/'+page+'?restAPI=JSON').subscribe(data => {
		      resolve(data);
		    }, err => {
		      console.log(err);
		    });
		});
	}

}
