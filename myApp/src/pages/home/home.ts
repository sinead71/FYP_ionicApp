import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
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
    this.af.auth.subscribe(user =>{
      console.log('---->', user)
      if(user){
        this.user = user.auth.providerData[0];
        //NewMessage is the name of the firebase table
        this.afItems = af.database.list('/NewMessage'); 
      }
      else{
        this.user = {};
        this.afItems = null;
      }
    });

    this.showDetails = false; 
    
  }

  Logout(){
    this.af.auth.logout();
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



  