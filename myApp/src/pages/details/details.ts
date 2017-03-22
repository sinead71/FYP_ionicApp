import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../app/providers/http.service';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage implements OnInit{
  item: any;
  constructor(public navCtrl: NavController,
              public params:NavParams, 
              private httpService: HttpService) {
      this.item = params.get('item');  
  }

  ngOnInit(){
    this.httpService.getData()
      .subscribe(
        (data: any) => console.log(data)
      );
  }

}