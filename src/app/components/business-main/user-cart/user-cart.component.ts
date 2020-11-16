import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css'],
})
export class UserCartComponent implements OnInit {
  displayedColumns: string[] = ['item', 'cost'];
  items: any;
  businessId: any;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.items = Object.values(this.cartService.items);
    this.route.parent.params.subscribe((params: Params) => {
      if (params['id']) {
          this.businessId = params['id'];
      }
    });
  }

  removeItem(item: any): void {
    delete this.cartService.items[item.id];
    this.items = Object.values(this.cartService.items);
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.items
      .map((t) => t.price * t.count)
      .reduce((acc, value) => acc + value, 0);
  }
}
