import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../app/providers/http.service';
//import { HomePage } from './home/home';

@Component({
  templateUrl: 'details.html',
  providers: [HttpService]
})
export class DetailsPage implements OnInit{
  items: any[] = [];
  comments: any[] = [];
  id: any;
  item: any;
  user = {};
  afItems: FirebaseListObservable<any[]>;
  afComments: FirebaseListObservable<any[]>;
  showHideInput: boolean = false;
  key: any;
  header: string;
  message: string;

  
  constructor(public navCtrl: NavController,
              public af: AngularFire,
              public params:NavParams, 
              private httpService: HttpService) {
      this.af.auth.subscribe(user =>{
        if(user){
          this.user = user.auth.providerData[0];
          //geting the messages
          this.afItems = af.database.list('/NewMessage' )
          .map((array) => array.reverse()) as FirebaseListObservable<any[]>;   
          //getting the comments
          //this.afComments = af.database.list('/newComment')   
          //.map((array) => array.reverse()) as FirebaseListObservable<any[]>;
        }
        else{
        this.user = {};
        this.afItems = null;
      }
      });
      //getting the key of the firebase data from home page
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

       this.httpService.getComments()
        .subscribe(
          NewMessage => {
            const myCommentsArray = [];
            for (let key in NewMessage){
              myCommentsArray.push(key);
            }
            this.items = myCommentsArray;
          }
        );           
  }

  

  ngOnInit(){
    this.key = this.params.get('key');
    this.header = this.params.get('header');
    this.message = this.params.get('message');

    this.httpService.getData()
      .subscribe(
        item => {this.item = item;
        //will also get image from here
      });
  }
  
  addCommentBtn(){
    if(this.showHideInput == false){
      this.showHideInput = true;
      console.log(this.showHideInput);
    }else if (this.showHideInput == true){
      this.showHideInput = false;
    }
    console.log("message after show hide statement");    
  }

  commentSubmit(newComment:string){
    this.httpService.sendData({newComment: newComment})
      .subscribe(
        data => console.log
      );

    
  }

}  

