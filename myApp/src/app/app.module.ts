import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { newMessagePage } from '../pages/newMessage/newMessage';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { TabsPage } from '../pages/tabs/tabs';




@NgModule({
  declarations: [
    MyApp,
    newMessagePage,
    ProfilePage,
    HomePage,
    DetailsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    newMessagePage,
    ProfilePage,
    HomePage,
    DetailsPage, 
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
