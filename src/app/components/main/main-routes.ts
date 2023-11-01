import { Routes } from "@angular/router";

export const majorRouter: Routes = [
  {
    path: '',
    loadComponent: () => import('./main-pages/main.component').then(component => component.MajorComponent),
    outlet: 'child'
  },
  {
    path: '**',
    redirectTo: '/major'
  }

];
