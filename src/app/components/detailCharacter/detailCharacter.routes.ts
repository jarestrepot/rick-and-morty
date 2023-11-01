import { Routes } from "@angular/router";


export const detailRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../detailCharacter/details-character-page/details-character-page.component').then(component => component.DetailsCharacterPageComponent),
    outlet: 'child'
  }
]
