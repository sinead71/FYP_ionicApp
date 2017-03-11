import { Routes, RouterModule } from '@angular/router';

import { AuthService } from '../providers/auth';
import { LoginPageComponent } from '/login-page/login-page.component';
import { HomePageComponent } from '/home-page/home-page.component';

const appRoutes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'login', component: LoginPageComponent }   
];


//the router module has no routes untill it is configured as see below
//RouterModule.forRoot(routes)
export const router = RouterModule.forRoot(appRoutes);

