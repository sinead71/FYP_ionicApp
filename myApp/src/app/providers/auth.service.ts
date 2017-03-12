import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';


@Injectable()
export class AuthService{
    user = {};
  items: FirebaseListObservable<any[]>;


    constructor(public af: AngularFire){
        this.af.auth.subscribe(user => {
      console.log('---->', user)
      if (user) {
        this.user = user.auth.providerData[0];
        this.items = af.database.list('/items');
      }
      else{
        this.user = {};
      }
    });
    }

    loginWithGoogle(){
        return this.af.auth.login({
            //want to sign in with google
            provider: AuthProviders.Google,
            //and how it will be done. popup = popup window
            method: AuthMethods.Popup
        });
    }   

    logout(){
        return this.af.auth.logout();
    }


  ifLoggedIn(){
    return (Object.keys(this.user).length === 0);
  }

} 