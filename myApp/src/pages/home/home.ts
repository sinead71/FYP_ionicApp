import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
//import { AuthService } from '../../app/providers/auth.service';

import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item: any;
  showDetails: boolean;

  user = {};
  afItems: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public af: AngularFire) {
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

  Login(){
     
  }
}



  