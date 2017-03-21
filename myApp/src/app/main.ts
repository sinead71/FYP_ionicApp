import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { bootstrap } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';

import { AppModule } from './app.module';
import { MyApp } from './app.component';

platformBrowserDynamic().bootstrapModule(AppModule);

bootstrap(MyApp, [HttpModule]);

