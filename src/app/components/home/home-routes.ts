import { Routes } from "@angular/router";



export const homeRoutes: Routes = [
  {
    path: 'major',
    loadChildren :() => import('../major/main-routes').then(routes => routes.majorRouter)
  },
  {
    path: 'chapters',
    loadChildren: () => import('../chapters/chapter-routes').then(routes => routes.chaptersRoutes),
  },
  // {
  //   path: 'details/:id',
  // },
  {
    path:'**',
    redirectTo:'/major'
  }
]

