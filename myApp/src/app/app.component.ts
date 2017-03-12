import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';

import { TabsPage } from '../pages/tabs/tabs';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  user = {};
  items: FirebaseListObservable<any[]>;

  constructor(platform: Platform, public af: AngularFire) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.af.auth.subscribe(user => {
      console.log('---->', user)
      if (user) {
        this.user = user.auth.providerData[0];
        this.items = af.database.list('/items');
      }
      else{
        this.user = {};
        this.items = null;
      }
    });
  }
}