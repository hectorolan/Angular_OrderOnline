import { Component, OnInit } from '@angular/core';
import { BusinessDataService } from 'src/app/services/business-data.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  businesses: any;

  constructor(private businessService: BusinessDataService) { }

  ngOnInit(): void {
    this.businesses = this.businessService.getAllBusinesses();
  }

}
