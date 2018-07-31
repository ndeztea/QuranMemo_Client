webpackJsonp([9],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuranMuqodimahPageModule", function() { return QuranMuqodimahPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quran_muqodimah__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuranMuqodimahPageModule = /** @class */ (function () {
    function QuranMuqodimahPageModule() {
    }
    QuranMuqodimahPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__quran_muqodimah__["a" /* QuranMuqodimahPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quran_muqodimah__["a" /* QuranMuqodimahPage */]),
            ],
        })
    ], QuranMuqodimahPageModule);
    return QuranMuqodimahPageModule;
}());

//# sourceMappingURL=quran-muqodimah.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuranMuqodimahPage; });
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
 * Generated class for the QuranMuqodimahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuranMuqodimahPage = /** @class */ (function () {
    function QuranMuqodimahPage(navCtrl, navParams, restApiService, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restApiService = restApiService;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingShow();
        var surah = navParams.get('surah');
        this.getMuqadimah(surah);
    }
    QuranMuqodimahPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuranMuqodimahPage');
    };
    QuranMuqodimahPage.prototype.getMuqadimah = function (surah) {
        var _this = this;
        this.restApiService.getMuqodimah(surah)
            .then(function (data) {
            if (Object.keys(data).length > 0) {
                _this.surah = data.surah;
                _this.muqodimah = data.muqodimah;
            }
            _this.loading.dismiss();
        });
    };
    QuranMuqodimahPage.prototype.loadingShow = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "\n        <div class=\"custom-spinner-container\">\n          Getting data...\n        </div>"
        });
        this.loading.present();
    };
    QuranMuqodimahPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    QuranMuqodimahPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quran-muqodimah',template:/*ion-inline-start:"/Users/happyfresh/Works/App/QuranMemo_Client/src/pages/quran-muqodimah/quran-muqodimah.html"*/'<!--\n  Generated template for the NewMemozPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Muqodimah Surah {{surah}}</ion-title>\n    <ion-buttons right>\n	    <button  ion-button icon-only  (click)="close()">\n	    	<ion-icon name="close"></ion-icon>\n	    </button>\n	  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div  [innerHtml]="muqodimah"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/happyfresh/Works/App/QuranMemo_Client/src/pages/quran-muqodimah/quran-muqodimah.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_restapi_service_restapi_service__["a" /* RestapiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], QuranMuqodimahPage);
    return QuranMuqodimahPage;
}());

//# sourceMappingURL=quran-muqodimah.js.map

/***/ })

});
//# sourceMappingURL=9.js.map