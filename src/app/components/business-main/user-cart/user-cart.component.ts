import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
  
  displayedColumns: string[] = ['item', 'cost'];  
  items: any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = Object.values(this.cartService.items);
  }

  removeItem(item: any): void {
    delete this.cartService.items[item.id];
    this.items = Object.values(this.cartService.items);
  }
  
  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.items.map(t => t.price * t.count).reduce((acc, value) => acc + value, 0);
  }

}
