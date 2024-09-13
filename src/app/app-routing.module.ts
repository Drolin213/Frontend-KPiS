import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { Error404Component } from './general/Error/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(e => e.AuthModule)
  },
  {
    path: 'home',
    component: AuthComponent,
    loadChildren: () => import('./pages/home/home.module').then(e => e.HomeModule)
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
