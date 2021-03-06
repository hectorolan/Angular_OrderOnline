import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-menu-categories',
  templateUrl: './admin-menu-categories.component.html',
  styleUrls: ['./admin-menu-categories.component.css']
})
export class AdminMenuCategoriesComponent implements OnInit {
    typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit(): void {
  }

  savePage() {
  }

  resetPage() { 

  }

}
