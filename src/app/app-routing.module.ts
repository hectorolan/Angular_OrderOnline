import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBusinessInfoComponent } from './components/admin/admin-business-info/admin-business-info.component';
import { AdminMenuCategoriesComponent } from './components/admin/admin-menu-categories/admin-menu-categories.component';
import { AdminMenuItemsComponent } from './components/admin/admin-menu-items/admin-menu-items.component';
import { MenuNavComponent } from './components/business-main/menu-nav/menu-nav.component';
import { UserCartComponent } from './components/business-main/user-cart/user-cart.component';
import { BusinessMainComponent } from './components/business-main/business-main.component';
import { UserInfoComponent } from './components/business-main/user-info/user-info.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/main/home/home.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '', // child route path
        component: AdminBusinessInfoComponent,
      },
      {
        path: 'categories',
        component: AdminMenuCategoriesComponent,
      },
      {
        path: 'items',
        component: AdminMenuItemsComponent,
      },
    ],
  },
  {
    path: 'business/:id',
    component: BusinessMainComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'cart',
        component: UserCartComponent,
      },
      {
        path: 'submitorder',
        component: UserInfoComponent,
      },
      {
        path: ':menu',
        component: MenuNavComponent,
      },
      {
        path: '',
        component: MenuNavComponent,
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '', // child route path
        component: HomeComponent,
      },
    ],
  },
  //{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: '', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
