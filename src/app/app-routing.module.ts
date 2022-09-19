import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { AllProductsComponent } from './components/products/all-products/all-products.component';
import { MyProductsComponent } from './components/products/my-products/my-products.component';
import { UpdateProductComponent } from './components/products/update-product/update-product.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'signup', pathMatch: 'full', component: SignupComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    canActivate: [AuthGuard],
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'allProducts',
    canActivate: [AuthGuard],
    pathMatch: 'full',
    component: AllProductsComponent,
  },
  {
    path: 'myProducts',
    canActivate: [AuthGuard],
    pathMatch: 'full',
    component: MyProductsComponent,
  },
  {
    path: 'addProduct',
    canActivate: [AuthGuard],
    pathMatch: 'full',
    component: AddProductComponent,
  },
  {
    path: 'updateProduct/:id',
    canActivate: [AuthGuard],
    pathMatch: 'full',
    component: UpdateProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
