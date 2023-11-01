import { Routes } from "@angular/router";

export const majorRouter: Routes = [
  {
    path: '',
    loadComponent: () => import('./main-pages/main.component').then(component => component.MajorComponent),
    outlet: 'child'
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./details-character-page/details-character-page.component').then(component => component.DetailsCharacterPageComponent),
    outlet: 'child'
  },
  {
    path: '**',
    redirectTo: '/major'
  }

];
