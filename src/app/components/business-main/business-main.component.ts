import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BusinessDataService } from 'src/app/services/business-data.service';
import { CartService } from 'src/app/services/cart.service';
import { NavDrawerService } from 'src/app/services/nav-drawer.service';

@Component({
  selector: 'app-business-main',
  templateUrl: './business-main.component.html',
  styleUrls: ['./business-main.component.css'],
})
export class BusinessMainComponent implements OnInit {
  categories: any;

  constructor(
    private cartService: CartService,
    private navDrawerService: NavDrawerService,
    private businessDataService: BusinessDataService
  ) {
  }  

  ngOnInit(): void {
    this.showMenuButton = window.innerWidth < 900;
    this.categories = this.businessDataService.getMenuCategories(1);
  }

  showMenuButton = false;
  @HostListener('window:resize', ['$event'])
  onResize(event) {    
    this.showMenuButton = window.innerWidth < 900;
  }

  toggleSideMenu() {
    this.navDrawerService.toggle();
  }

  onSelectDrawerPage(page: any): void{
    // TODo, navigate to the correct mpage
    this.navDrawerService.close();
  }
}
