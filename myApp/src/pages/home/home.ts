import { Component} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
//import { AuthService } from '../../app/providers/auth.service';

import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { HttpService } from '../../app/providers/http.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[] = [];
  showDetails: boolean;

  user = {};
  afItems: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public af: AngularFire, private httpService: HttpService) {
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

      
      //creating array to loop through data in newMessages table and adding it to the home page
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



  