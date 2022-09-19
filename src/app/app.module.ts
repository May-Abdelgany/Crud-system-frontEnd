import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { AllProductsComponent } from './components/products/all-products/all-products.component';
import { CardComponent } from './components/products/card/card.component';
import { MyProductsComponent } from './components/products/my-products/my-products.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { UpdateProductComponent } from './components/products/update-product/update-product.component';
@NgModule({
  declarations: [AppComponent, SignupComponent, LoginComponent, HomeComponent, SidebarComponent, SearchbarComponent, AllProductsComponent, CardComponent, MyProductsComponent, AddProductComponent, ProductFormComponent, UpdateProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
