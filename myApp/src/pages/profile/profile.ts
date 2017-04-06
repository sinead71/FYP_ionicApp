import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user = {};

  constructor(public navCtrl: NavController, public af: AngularFire ) {
    this.af.auth.subscribe(user =>{
      if(user){
        this.user = user.auth.providerData[0]; 
      }else{
        this.user = {};
      }
    })
  }
  
  Logout(){
    this.af.auth.logout();
  }

}
