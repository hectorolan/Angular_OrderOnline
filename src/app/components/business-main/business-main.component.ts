import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { NavDrawerService } from 'src/app/services/nav-drawer.service';

@Component({
  selector: 'app-business-main',
  templateUrl: './business-main.component.html',
  styleUrls: ['./business-main.component.css'],
})
export class BusinessMainComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private navDrawerService: NavDrawerService
  ) {}
  showMenuButton = false;

  ngOnInit(): void {
    this.showMenuButton = window.innerWidth < 900;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {    
    this.showMenuButton = window.innerWidth < 900;
  }

  toggleSideMenu() {
    this.navDrawerService.toggle();
  }

  printCart() {
    for (let key in this.cartService.items) {
      let value = this.cartService.items[key];
      console.log(value.name + ' count:' + value.count);
    }
  }
}
