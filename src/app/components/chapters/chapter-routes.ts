import { Routes } from "@angular/router";

export const chaptersRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../chapters/pages/chapters-all/chapters-all.component').then(component => component.ChaptersAllComponent),
    outlet: 'child'
  }
]

