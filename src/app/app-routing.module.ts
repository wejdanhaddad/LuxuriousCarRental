import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CarPageComponent } from './car-page/car-page.component';
import {HomeComponent} from './home-page/home-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'car/:id', component:CarPageComponent},
  {path:'cart-page', component: CartPageComponent},
  { path: 'form-page', component:FormPageComponent }
  ,{ path: 'contact-page', component:ContactPageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }