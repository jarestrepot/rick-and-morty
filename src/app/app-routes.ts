import {  Routes } from '@angular/router';
import { HomePagesComponent } from '@components/home/home-pages/home-pages.component.js';

export const appRoutes: Routes = [
  {
    path:'',
    component: HomePagesComponent,
    loadChildren: () => import('./components/home/home-routes').then(routes => routes.homeRoutes)
  }
];

