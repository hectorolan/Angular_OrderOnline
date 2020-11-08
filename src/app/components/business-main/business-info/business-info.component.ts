import { Component, OnInit } from '@angular/core';
import { BusinessDataService } from 'src/app/services/business-data.service';

@Component({
  selector: 'app-bussiness-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.css']
})
export class BusinessInfoComponent implements OnInit {

  businessInfo: any;

  constructor(private businessService: BusinessDataService) { }

  ngOnInit(): void {
    this.businessInfo = this.businessService.getBusinessInfo(1);
  }

}
