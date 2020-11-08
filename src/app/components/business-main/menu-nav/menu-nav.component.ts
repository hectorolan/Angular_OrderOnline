import { ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BusinessDataService } from 'src/app/services/business-data.service';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit, AfterViewInit {
  
  @Input() selectedPage: string;
  categories: any;

  constructor(private businessDataService: BusinessDataService) { }

  ngOnInit(): void {
    this.showTopTabs = window.innerWidth >= 900;
    this.selectedPage = "Menu";
    this.categories = this.businessDataService.getMenuCategories(1);
  }
  
  ngAfterViewInit(): void {
  }

  showTopTabs = false;
  @HostListener('window:resize', ['$event'])
  onResize(event) {    
    this.showTopTabs = window.innerWidth >= 900;
  }

}
