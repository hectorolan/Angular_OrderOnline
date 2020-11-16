import { HostListener, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BusinessDataService } from 'src/app/services/business-data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-business-main',
  templateUrl: './business-main.component.html',
  styleUrls: ['./business-main.component.css'],
})
export class BusinessMainComponent implements OnInit {
  @ViewChild('drawer') public drawer: MatSidenav;
  data: any;

  constructor(
    private cartService: CartService,
    private businessDataService: BusinessDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.showMenuButton = window.innerWidth < 900;
    this.route.params.subscribe((params: Params) => {
      if (params['id']){
        this.data = {
          businessId: params['id'],
          categories: this.businessDataService.getMenuCategories(params['id'])
        }
      } 
    });
  }

  showMenuButton = false;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.showMenuButton = window.innerWidth < 900;
  }

  onSelectDrawerPage(page: any): void {
    // TODo, navigate to the correct mpage
    this.router.navigate(['/business/' + this.data.businessId + '/' + page + '/']);
    this.drawer.close();
  }
}
