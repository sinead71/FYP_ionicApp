import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent{
    
    constructor(public authService: AuthService){
    }

}