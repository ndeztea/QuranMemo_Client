import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages';
import { Settings } from '../providers';

@Component({
  template: `<ion-menu [content]="content" type="push">
    <!--ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header-->

    <ion-content class="menu">
      <header class="profile">
        <div class="header-bg">
           <ion-avatar item-start>
            <img src="assets/img/speakers/duck.jpg">
            </ion-avatar>
            <h2>Asep Koswara</h2>
          <button ion-button  (click)="openNav('LoginPage')" menuClose color="secondary">Login</button>
          <button ion-button (click)="openNav('SignupPage')" menuClose color="danger">Signup</button>
        </div>
      </header>
      <ion-searchbar placeholder="Search Ayah" animated="true"></ion-searchbar>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          <ion-icon name="{{p.icon}}"></ion-icon>
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;


  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Dashboard', component: 'DashboardPage', icon: 'home' },
    { title: 'Quran', component: 'QuranPage', icon: 'book' },
    { title: 'E-Content', component: 'EContentPage', icon: 'cloudy'  },
    { title: 'Subscriptions', component: 'SubscriptionsPage', icon: 'cart' },
    { title: 'FAQ', component: 'FaqPage', icon: 'help'  },
    { title: 'Contact', component: 'ContactPage', icon:'mail' },
    { title: 'Partners', component: 'PartnersPage', icon:'contact' },
    { title: 'Settings', component: 'QuranSettingsPage', icon:'cog' },
    { title: 'How To', component: 'QuranInformationPage', icon:'information-circle' }
  ]

  params: Object;
  pushPage: any;
  apiHost : 'http://localhost:8888/QuranMemo/'
  
  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openNav(page){
    this.nav.push(page);
  }

}
