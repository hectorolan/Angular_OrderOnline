import { Input, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BusinessDataService } from 'src/app/services/business-data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit, OnChanges {
  menu: any;
  menuItems: any;
  @Input() category: string;

  constructor(private businessDataService: BusinessDataService,
                private cartService: CartService,
                private _snackBar: MatSnackBar) { }

  ngOnChanges(): void {
    this.updateList();
  }

  ngOnInit(): void {
    this.menu = this.businessDataService.getMenu(1);
    this.updateList();
  }

  updateList(){
    if(this.menu == null || this.menu == undefined){
      return;
    }
    if(this.category == 'Menu'){
      this.menuItems = this.menu;
      return;
    }
    this.menuItems = this.menu.filter(c => c.category == this.category);
  }

  addToCart(item: any){
    if(item.id in this.cartService.items){
      this.cartService.items[item.id].count++;
    }else{
      item.count = 1;
      this.cartService.items[item.id] = item;
    }
    this._snackBar.open('Added to cart.',null,{duration:500,});
  }
}
