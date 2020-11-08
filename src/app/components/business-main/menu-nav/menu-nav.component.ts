import { HostListener } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BusinessDataService } from 'src/app/services/business-data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
  
  selectedPage: string = 'Menu';
  categories: any;

  constructor(private businessDataService: BusinessDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showTopTabs = window.innerWidth >= 900;
    this.categories = this.businessDataService.getMenuCategories(1);
    this.route.params.subscribe((params: Params) => {
      if(params['menu'])
        this.selectedPage = params['menu'];
    });    
  }

  showTopTabs = false;
  @HostListener('window:resize', ['$event'])
  onResize(event) {    
    this.showTopTabs = window.innerWidth >= 900;
  }
}
