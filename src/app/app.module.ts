import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminBusinessInfoComponent } from './components/admin/admin-business-info/admin-business-info.component';
import { AdminNavComponent } from './components/admin/admin-nav/admin-nav.component';
import { AdminMenuCategoriesComponent } from './components/admin/admin-menu-categories/admin-menu-categories.component';
import { AdminMenuItemsComponent } from './components/admin/admin-menu-items/admin-menu-items.component';
import { AdminMenuItemComponent } from './components/admin/admin-menu-item/admin-menu-item.component';
import { MenuNavComponent } from './components/menu/menu-nav/menu-nav.component';
import { MenuItemsComponent } from './components/menu/menu-items/menu-items.component';
import { UserCartComponent } from './components/user/user-cart/user-cart.component';
import { UserInfoComponent } from './components/user/user-info/user-info.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    AdminBusinessInfoComponent,
    AdminNavComponent,
    AdminMenuCategoriesComponent,
    AdminMenuItemsComponent,
    AdminMenuItemComponent,
    MenuNavComponent,
    MenuItemsComponent,
    UserCartComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
