import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { NavController } from 'ionic-angular';
import { HttpService } from '../../app/providers/http.service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  items: any[] = [];
  user = {};
  afItems: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, 
              public af: AngularFire, 
              private httpService: HttpService ) {
    this.af.auth.subscribe(user =>{
      if(user){
        this.user = user.auth.providerData[0]; 
        this.afItems = af.database.list('/NewMessage', {query: {orderByChild: 'date'}})
        .map((array) => array.reverse()) as FirebaseListObservable<any[]>; 
      }else{
        this.user = {};
      }
    

    this.httpService.getData()
        .subscribe(
            NewMessage => {
              const myArray = [];
              for (let key in NewMessage){
                myArray.push(key);
                console.log(myArray);
              }
              this.items = myArray;
            }
        );
    });
  }
  
  Logout(){
    this.af.auth.logout();
  }

}
