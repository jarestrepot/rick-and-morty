import { Routes } from "@angular/router";
import { MajorComponent } from "./main-pages/main.component";

export const majorRouter: Routes = [
  {
    path: '',
    loadComponent: () => import('./main-pages/main.component').then(component => component.MajorComponent),
    outlet: 'child'
  },

];
