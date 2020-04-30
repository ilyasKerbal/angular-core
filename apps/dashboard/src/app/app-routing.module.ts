import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '@workshop/ui-login';

const routes: Routes = [
  {path: '', loadChildren: () => import('apps/dashboard/src/app/home/home.module').then(mod => mod.HomeModule)},
  {path: 'projects', loadChildren: () => import('apps/dashboard/src/app/projects/projects.module').then(mod => mod.ProjectsModule)},
  {path: 'customers', loadChildren: () => import('apps/dashboard/src/app/customers/customers.module').then(mod => mod.CustomersModule)},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
