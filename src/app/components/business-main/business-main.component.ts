import { HostListener, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { BusinessDataService } from 'src/app/services/business-data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-business-main',
  templateUrl: './business-main.component.html',
  styleUrls: ['./business-main.component.css'],
})
export class BusinessMainComponent implements OnInit {
  categories: any;
  @ViewChild('drawer') public drawer: MatSidenav;

  constructor(
    private cartService: CartService,
    private businessDataService: BusinessDataService,
    private router: Router) {
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

  onSelectDrawerPage(page: any): void{
    // TODo, navigate to the correct mpage
    this.router.navigate(['/business/'+page+'/']);
    this.drawer.close();
  }
}
