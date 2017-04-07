import { Component} from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';


@Component({
    selector: 'app-home-page',
    templateUrl: 'login-page.component.html'
})
export class LoginPageComponent {
    user = {};
    afItems: FirebaseListObservable<any[]>;


    constructor(public af: AngularFire){
        this.af.auth.subscribe(user =>{
      console.log('---->', user)
      if(user){
        this.user = user.auth.providerData[0];
        this.afItems = af.database.list('/items'); 
      }
      else{
        this.user = {};
        this.afItems = null;
      }
    });  
 
    } 

    Login(){
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
      }); 
      alert("log in clicked"); 
    }

    Logout(){
    this.af.auth.logout();
    }

    isUserLoggedIn(){
      return (Object.keys(this.user).length === 0);      
    }
}