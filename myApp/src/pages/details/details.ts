import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../app/providers/http.service';
import { HomePage } from './home/home';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage implements OnInit{
  items: any[] = [];
  id: any;
  item: any;
  user = {};
  afItems: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController,
              public af: AngularFire,
              public params:NavParams, 
              private httpService: HttpService) {
      this.af.auth.subscribe(user =>{
        if(user){
          this.user =user.auth.providerData[0];
          this.afItems =af.database.list('/NewMessage' )
          .map((array) => array.reverse()) as FirebaseListObservable<any[]>;      
        }
        else{
        this.user = {};
        this.afItems = null;
      }
      }) ;

      this.httpService.getData()
        .subscribe(
            NewMessage => {
              const myArray = [];
              for (let key in NewMessage){
                myArray.push(key);
              }
              this.items = myArray;
            }
        );  
  }

  

  ngOnInit(){
    this.id = this.params['id'];
    this.httpService.getData()
      .subscribe(
        item => {this.item = item;
        //will also get image from here
      });
  }

}  