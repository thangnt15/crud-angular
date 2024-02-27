import { Routes } from '@angular/router';

import { ProductComponent } from './admin/product/product.component';
import { ProductAdminListComponent } from './admin/product/product-admin-list/product-admin-list.component';
import { ProductEditComponent } from './admin/product/product-edit/product-edit.component';



export const routes: Routes = [
    { path: 'add-product', component: ProductComponent },
    { path: 'product-list', component: ProductAdminListComponent },
    { path:'edit-product/:id', component:ProductEditComponent}
    
];
