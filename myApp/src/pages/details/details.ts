import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
  item: any;
  constructor(public navCtrl: NavController, public params:NavParams) {
      this.item = params.get('item');  
  }

}