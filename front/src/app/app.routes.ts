import { Routes } from '@angular/router';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';
import { UpdateProductsComponent } from './components/products/update-products/update-products.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    {path: "products/list", component:  ListProductsComponent},
    {path: "products/new", component: NewProductComponent},
    {path: "products/:id", component: UpdateProductsComponent},
    {path: "", component: HomePageComponent},
];
