import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBusinessInfoComponent } from './components/admin/admin-business-info/admin-business-info.component';
import { AdminNavComponent } from './components/admin/admin-nav/admin-nav.component';
import { AdminMenuCategoriesComponent } from './components/admin/admin-menu-categories/admin-menu-categories.component';
import { AdminMenuItemsComponent } from './components/admin/admin-menu-items/admin-menu-items.component';
import { MenuNavComponent } from './components/business-main/menu-nav/menu-nav.component';
import { UserCartComponent } from './components/business-main/user-cart/user-cart.component';
import { BusinessMainComponent } from './components/business-main/business-main.component';

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
    path: 'business',
    component: BusinessMainComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '',
        component: MenuNavComponent 
      },
      {
        path:'cart',
        component: UserCartComponent
      },
      {
        path: 'bussines-menu-items',
        component: AdminMenuItemsComponent,
      },
    ],
  },
  //{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
