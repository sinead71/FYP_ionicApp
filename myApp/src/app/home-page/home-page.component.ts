import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';


@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
    constructor(public authService: AuthService){} 

    ngOnInit(){     
    }

    logout(){
        //logs the person out
        this.authService.logout();
        //then brings them back to the login page
        //this.router.navigate(['login']);
    }
}