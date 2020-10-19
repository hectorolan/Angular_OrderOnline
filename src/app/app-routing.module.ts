import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBusinessInfoComponent } from './admin/admin-business-info/admin-business-info.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminMenuCategoriesComponent } from './admin/admin-menu-categories/admin-menu-categories.component';
import { AdminMenuItemsComponent } from './admin/admin-menu-items/admin-menu-items.component';
import { MenuNavComponent } from './menu/menu-nav/menu-nav.component';
import { MenuItemsComponent } from './menu/menu-items/menu-items.component';
import { UserCartComponent } from './user/user-cart/user-cart.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminNavComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'business-info', // child route path
        component: AdminBusinessInfoComponent,
      },
      {
        path: 'bussines-menu-categories',
        component: AdminMenuCategoriesComponent,
      },
      {
        path: 'bussines-menu-items',
        component: AdminMenuItemsComponent,
      },
    ],
  },
  { 
    path: '',
    component: MenuNavComponent,
    children: [
      {
        path: '', // child route path
        component: MenuItemsComponent,
      },
      {
        path: 'cart',
        component: UserCartComponent,
      },
    ] 
  },
  //{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
