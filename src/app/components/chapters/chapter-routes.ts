import { Routes } from "@angular/router";
import { ChaptersAllComponent } from "./pages/chapters-all/chapters-all.component";
import { ChapterDetailComponent } from "./pages/chapter-detail/chapter-detail.component";

export const chaptersRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../chapters/pages/chapters-all/chapters-all.component').then(component => component.ChaptersAllComponent),
    outlet: 'child'
  },
  {
    path: ':id',
    loadComponent: () => import('../chapters/pages/chapter-detail/chapter-detail.component').then(component => component.ChapterDetailComponent),
    outlet: 'child'
  }
]

