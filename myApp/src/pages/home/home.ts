import { Component } from '@angular/core';
import { AuthService } from './app/providers/auth.service';

import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item: any;
  showDetails: boolean;
  constructor(public navCtrl: NavController) {
    this.showDetails = false; 
  }

  viewDetails(){
    this.navCtrl.push (DetailsPage)
    if(this.showDetails == true){
      this.showDetails = false;
    } else {
      this.showDetails = true;
    }
  }
}



  