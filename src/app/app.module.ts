import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminBusinessInfoComponent } from './admin/admin-business-info/admin-business-info.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminMenuCategoriesComponent } from './admin/admin-menu-categories/admin-menu-categories.component';
import { AdminMenuItemsComponent } from './admin/admin-menu-items/admin-menu-items.component';
import { AdminMenuItemComponent } from './admin/admin-menu-item/admin-menu-item.component';
import { MenuNavComponent } from './menu/menu-nav/menu-nav.component';
import { MenuItemsComponent } from './menu/menu-items/menu-items.component';
import { UserCartComponent } from './user/user-cart/user-cart.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
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
