webpackJsonp([6],{

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuranPageModule", function() { return QuranPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quran__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuranPageModule = /** @class */ (function () {
    function QuranPageModule() {
    }
    QuranPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__quran__["a" /* QuranPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quran__["a" /* QuranPage */]),
            ]
        })
    ], QuranPageModule);
    return QuranPageModule;
}());

//# sourceMappingURL=quran.module.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuranPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restapi_service_restapi_service__ = __webpack_require__(224);
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
 * Generated class for the QuranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuranPage = /** @class */ (function () {
    function QuranPage(navCtrl, navParams, modalCtrl, popOverCtrl, restApiService, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.popOverCtrl = popOverCtrl;
        this.restApiService = restApiService;
        this.loadingCtrl = loadingCtrl;
        var page = this.navParams.get('page');
        var juz = this.navParams.get('juz');
        var surah = this.navParams.get('surah');
        var ayat_start = this.navParams.get('ayat_start');
        var ayat_end = this.navParams.get('ayat_end');
        page = typeof page == 'undefined' ? 1 : page;
        juz = typeof juz == 'undefined' ? 'undefined' : juz;
        surah = typeof surah == 'undefined' ? 'undefined' : surah;
        console.log('in');
        this.loadingShow();
        // show juz page if juz is not empty
        if (juz != 'undefined') {
            this.getJuz(juz);
        }
        else if (surah != 'undefined') {
            this.getRangeAyat(surah, ayat_start + '-' + ayat_end);
        }
        else {
            this.getPages(page);
        }
    }
    QuranPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuranPage');
    };
    QuranPage.prototype.openModal = function (page, parameter) {
        var modal = this.modalCtrl.create(page, parameter);
        modal.present();
    };
    QuranPage.prototype.openPopOver = function (page) {
        var popOver = this.popOverCtrl.create(page);
        popOver.present();
    };
    QuranPage.prototype.getPages = function (page) {
        var _this = this;
        this.show_range_ayat = false;
        this.restApiService.getAyats(page)
            .then(function (data) {
            if (Object.keys(data).length > 0) {
                _this.ayats = data.ayats;
                _this.nextPage = data.next_page;
                _this.prevPage = data.prev_page;
                _this.surah = data.surah;
                _this.juz = data.juz;
                _this.currPage = data.curr_page;
            }
            _this.loading.dismiss();
        });
    };
    QuranPage.prototype.getRangeAyat = function (surah, ayat) {
        var _this = this;
        this.show_range_ayat = true;
        this.restApiService.getRangeAyat(surah, ayat)
            .then(function (data) {
            if (Object.keys(data).length > 0) {
                _this.ayats = data.ayats;
                _this.surah = data.surah;
                _this.range_ayat = data.ayat;
                console.log(data);
            }
            _this.loading.dismiss();
        });
    };
    QuranPage.prototype.getJuz = function (juz) {
        var _this = this;
        this.restApiService.getAyatJuz(juz)
            .then(function (data) {
            if (Object.keys(data).length > 0) {
                _this.ayats = data.ayats;
                _this.nextPage = data.next_page;
                _this.prevPage = data.prev_page;
                _this.surah = data.surah;
                _this.juz = data.juz;
                _this.currPage = data.curr_page;
            }
            _this.loading.dismiss();
        });
    };
    QuranPage.prototype.goToPage = function (page) {
        this.navCtrl.push('QuranPage', {
            page: page
        });
    };
    QuranPage.prototype.loadingShow = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "\n        <div class=\"custom-spinner-container\">\n          Getting data...\n        </div>"
        });
        this.loading.present();
    };
    QuranPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quran',template:/*ion-inline-start:"/Users/happyfresh/Works/App/QuranMemo_Client/src/pages/quran/quran.html"*/'<!--\n  Generated template for the QuranPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <div class="sub-title">Surah {{surah}}</div>\n      <small class="small-title" *ngIf="juz>0">Juz {{juz}} | Page {{currPage}}</small>\n      <small class="small-title" *ngIf="show_range_ayat==true">Ayat {{range_ayat}}</small>\n    </ion-title>\n    <ion-buttons left>\n	     <button ion-button icon-only menuToggle start>\n	        <ion-icon name="menu"></ion-icon>\n	     </button>\n	 </ion-buttons>\n   <ion-buttons right>\n       <button ion-button icon-only (click)="openModal(\'QuranSearchPage\')">\n          <ion-icon name="search"></ion-icon>\n       </button>\n       <button ion-button icon-only (click)="setBookmark()">\n        <ion-icon name="bookmark"></ion-icon>\n      </button>\n   </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="content-body">\n  <div class="paging no-margin">\n    <button ion-button round *ngIf="prevPage > 0" navPop>\n      <ion-icon name="ios-arrow-dropleft"></ion-icon>\n    </button>\n    <button ion-button round *ngIf="prevPage < 604" (click)="goToPage(nextPage)">\n      <ion-icon name="ios-arrow-dropright"></ion-icon>\n    </button>\n</div>\n  <div *ngFor="let ayat of ayats">\n    <ion-card class="mushaf header"  *ngIf="ayat.ayat==1">\n      <ion-card-content>\n        <strong>{{ayat.surah}}. {{ayat.surah_name}}</strong><br>\n        <small>{{ayat.type}} #{{ayat.order}} | {{ayat.count_ayat}}</small><br>\n        <button ion-button class="muqodimah" (click)="openModal(\'QuranMuqodimahPage\',{surah:ayat.surah})">Muqodimah</button>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class="mushaf bismillah"  *ngIf="ayat.ayat==1">\n      <ion-card-content><img src="assets/img/bismillah.png"/></ion-card-content>\n    </ion-card>\n    <ion-card class="mushaf">\n      <ion-card-content>\n        <div class="ayat_number">{{ayat.ayat}}</div>\n        <div class="ayat_arabic" dir="rtl">\n          ﻿{{ayat.text}}\n        </div>\n         <div class="ayat_translate">\n          {{ayat.text_indo}}\n        </div>\n      </ion-card-content>\n      <ion-row>\n        <ion-col>\n          <ion-icon name="play"> Play</ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="bulb"> Memoz</ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="bookmarks"> Tafsir</ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon  name="share"> Share</ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <ion-footer no-border>\n    <div class="player">\n        <button ion-button round>\n          <ion-icon name="md-play"></ion-icon>\n        </button>\n        <button ion-button round>\n          <ion-icon name="md-pause"></ion-icon>\n        </button>\n        <button ion-button round>\n          <ion-icon name="md-square"></ion-icon>\n        </button>\n    </div>\n</ion-footer>\n<div class="paging">\n    <button ion-button round  (click)="viewCtrl.dismiss()" *ngIf="prevPage > 0">\n      <ion-icon name="ios-arrow-dropleft"></ion-icon>\n    </button>\n    <button ion-button round  (click)="goToPage(nextPage)" *ngIf="prevPage < 604">\n      <ion-icon name="ios-arrow-dropright"></ion-icon>\n    </button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/happyfresh/Works/App/QuranMemo_Client/src/pages/quran/quran.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_restapi_service_restapi_service__["a" /* RestapiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], QuranPage);
    return QuranPage;
}());

//# sourceMappingURL=quran.js.map

/***/ })

});
//# sourceMappingURL=6.js.map