import { Injectable } from '@angular/core';
import business from '../data/business.json';
import menuCategories from '../data/menu-categories.json';
import menuItems from '../data/menu.json';


@Injectable({
  providedIn: 'root'
})
export class BusinessDataService {

  constructor() { }

  getBusinessInfo(businessId: number){
    return business;
  }

  getMenu(businessId: number){
    return menuItems;
  }

  getMenuCategories(businessId: number){
    return menuCategories;
  }
}
