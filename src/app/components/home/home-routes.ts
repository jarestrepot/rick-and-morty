import { Routes } from "@angular/router";



export const homeRoutes: Routes = [
  {
    path: 'major',
    loadChildren :() => import('../main/main-routes').then(routes => routes.majorRouter)
  },
  {
    path: 'chapters',
    loadChildren: () => import('../chapters/chapter-routes').then(routes => routes.chaptersRoutes),
  },
  {
    path: 'details/:id',
    loadChildren: () => import('../detailCharacter/detailCharacter.routes').then(routes => routes.detailRoutes)
  },
  {
    path:'**',
    redirectTo:'/major'
  }
]

