import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {
    
    constructor(public authService: AuthService, private router: Router){
        console.log('router testing');
    }

    ngOnInit(){
    }

    login(){
        this.authService.loginWithGoogle().then((data) => {
            this.router.navigate(['']);
        })
    }
}