import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomLayoutComponent} from './custom-layout/custom-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'pages',
    component: CustomLayoutComponent,
    children: [{
      path: 'dashboard',
      loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
    }, {
      path: 'add-product',
      loadChildren: () => import('./pages/add-product/add-product.module').then(m => m.AddProductModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
