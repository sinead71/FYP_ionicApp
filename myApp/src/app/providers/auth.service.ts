import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService{

    constructor(public af: AngularFire){}

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

} 