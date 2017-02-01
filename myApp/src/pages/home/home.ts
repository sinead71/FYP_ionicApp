import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item: any;
  constructor(public navCtrl: NavController) {

  }

  viewItem(item){
    this.navCtrl.push(DetailsPage, {
      item:item
    });
  }
}
