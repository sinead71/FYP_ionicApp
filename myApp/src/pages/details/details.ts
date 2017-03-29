import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';

import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../app/providers/http.service';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage implements OnInit{
  id: any;
  item: any;
  constructor(public navCtrl: NavController,
              public params:NavParams, 
              private httpService: HttpService) {
      this.item = params.get('item');  
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