import { Routes } from '@angular/router';

import { HelloComponent } from './hello/hello';
import { AboutComponent } from './about/about';
import { NotFoundComponent } from './not-found/not-found';
import { AppCounterComponent } from './app-counter/app-counter';

export const routes: Routes = [
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  { path: 'hello', component: HelloComponent },
  { path: 'about', component: AboutComponent },
  { path: 'counter', component: AppCounterComponent }, 
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }

];