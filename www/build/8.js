webpackJsonp([8],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuranSearchPageModule", function() { return QuranSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quran_search__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuranSearchPageModule = /** @class */ (function () {
    function QuranSearchPageModule() {
    }
    QuranSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__quran_search__["a" /* QuranSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quran_search__["a" /* QuranSearchPage */]),
            ],
        })
    ], QuranSearchPageModule);
    return QuranSearchPageModule;
}());

//# sourceMappingURL=quran-search.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuranSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_restapi_service_restapi_service__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the QuranSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuranSearchPage = /** @class */ (function () {
    function QuranSearchPage(navCtrl, navParams, viewCtrl, restApiService, formBuilder, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.restApiService = restApiService;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.search_result = [];
        this.restApiService.getJuz()
            .then(function (data) {
            _this.juz = data;
            console.log(data);
        });
        this.restApiService.getSurah()
            .then(function (data) {
            _this.surah = data;
            console.log(data);
        });
        this.todo = this.formBuilder.group({
            ayat_start: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ayat_end: [''],
            surah: ['']
        });
    }
    QuranSearchPage.prototype.ionViewDidLoad = function () {
        this.search = "keyword";
        console.log('ionViewDidLoad QuranSearchPage');
    };
    QuranSearchPage.prototype.goToJuz = function (juz) {
        this.navCtrl.push('QuranPage', {
            juz: juz
        });
    };
    QuranSearchPage.prototype.submitForm = function () {
        this.navCtrl.push('QuranPage', this.todo.value);
    };
    QuranSearchPage.prototype.cancelSearch = function () {
        this.show_loading = false;
        console.log('cancel');
    };
    QuranSearchPage.prototype.searchKeyword = function (infinityScroll, page) {
        var _this = this;
        console.log(this.keyword);
        if (this.keyword != '') {
            this.show_loading = true;
            this.restApiService.getSearchByKeyword(this.keyword, page)
                .then(function (data) {
                if (data.search_result == 0) {
                    var toast = _this.toastCtrl.create({
                        message: "Search result is empty",
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                    _this.show_loading = false;
                    return false;
                }
                for (var i = 0; i < data.search_result.length; i++) {
                    _this.search_result.push(data.search_result[i]);
                }
                _this.search_count = data.search_count;
                _this.page = data.page;
                _this.show_loading = false;
                if (infinityScroll != '') {
                    infinityScroll.complete();
                }
            });
        }
    };
    QuranSearchPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    QuranSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quran-search',template:/*ion-inline-start:"/Users/happyfresh/Works/App/QuranMemo_Client/src/pages/quran-search/quran-search.html"*/'<!--\n  Generated template for the QuranSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Search</ion-title>\n    <ion-buttons right>\n	    <button  ion-button icon-only  (click)="close()">\n	    	<ion-icon name="close"></ion-icon>\n	    </button>\n	  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content no-padding>\n  <ion-segment [(ngModel)]="search" ngSelected="selected">\n    <ion-segment-button value="keyword">\n      Keyword\n    </ion-segment-button>\n    <ion-segment-button value="surah">\n      Surah\n    </ion-segment-button>\n    <ion-segment-button value="juz">\n      Juz\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]="search">\n    <div *ngSwitchCase="\'surah\'">\n      <form (ngSubmit)="submitForm()" [formGroup]="todo">\n        <ion-item>\n          <ion-label floating>Surah</ion-label>\n          <ion-select type="text" name="surah" formControlName="surah">\n            <ion-option *ngFor="let s of surah" value="{{s.id}}">{{s.id}}. {{s.surah}} ({{s.type}} {{s.ayat}} Ayah)</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Ayah Start</ion-label>\n          <ion-input  name="ayat_start" type="type" formControlName="ayat_start"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Ayah End</ion-label>\n          <ion-input  name="ayat_end" type="type" formControlName="ayat_end"></ion-input>\n        </ion-item>\n        <button ion-button type="submit" block>Search</button>\n      </form>\n    </div>\n\n  <div *ngSwitchCase="\'juz\'">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 col-sm *ngFor="let j of juz" (click)="goToJuz(j.number)">\n          {{j.number}} - {{j.number_arabic}}<br>\n          {{j.juz}}<br>\n          {{j.juz_latin}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div *ngSwitchCase="\'keyword\'">\n    <ion-searchbar\n      [showCancelButton]="shouldShowCancel"\n      (ionCancel)="cancelSearch()"\n      (ionClear)="cancelSearch()"\n      (ionInput)="searchKeyword(\'\',1)" [(ngModel)]="keyword" debounce="600">\n    </ion-searchbar>\n    <ion-spinner name="bubbles" *ngIf="show_loading==true"></ion-spinner>\n    <ion-card *ngIf="search_count > 0">\n      <ion-card-content>\n        <strong>Total result : {{search_count}}</strong>\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngFor="let search of search_result">\n      <ion-card-content>\n        <p>{{ search.text_indo }}</p>\n        <small>QS. {{search.surah_name}} : {{search.ayat}}</small>\n      </ion-card-content>\n    </ion-card>\n    <ion-infinite-scroll (ionInfinite)="searchKeyword($event,page)">\n     <ion-infinite-scroll-content \n      loadingSpinner="bubbles"\n      loadingText="Loading more data..."></ion-infinite-scroll-content>\n   </ion-infinite-scroll>\n  </div>\n  \n</div>\n\n  \n</ion-content>\n'/*ion-inline-end:"/Users/happyfresh/Works/App/QuranMemo_Client/src/pages/quran-search/quran-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_restapi_service_restapi_service__["a" /* RestapiServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], QuranSearchPage);
    return QuranSearchPage;
}());

//# sourceMappingURL=quran-search.js.map

/***/ })

});
//# sourceMappingURL=8.js.map