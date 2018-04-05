import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllProductsComponent } from './component/all-products/all-products.component';

const routes: Routes = [
  { path: '', redirectTo: '/show-all', pathMatch: 'full' },
  { path: 'show-all', component: AllProductsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
