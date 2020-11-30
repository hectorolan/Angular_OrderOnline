import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import cities from '../../../data/cities.json';
import hours from '../../../data/hours.json';

@Component({
    selector: 'app-admin-business-info',
    templateUrl: './admin-business-info.component.html',
    styleUrls: ['./admin-business-info.component.css'],
})
export class AdminBusinessInfoComponent implements OnInit {
    cities: string[];
    hours: string[];

    menuVisibleFormControl = new FormControl(false, []);

    businessNameFormControl = new FormControl('', [Validators.required]);
    cityFormControl = new FormControl('', [Validators.required]);
    telephoneFormControl = new FormControl('', [
        Validators.required,
        Validators.min(1000000000),
        Validators.max(9999999999),
    ]);
    directionFormControl = new FormControl('', []);
    sundayOpenFormControl = new FormControl('Closed', []);
    sundayCloseFormControl = new FormControl('Closed', []);
    mondayOpenFormControl = new FormControl('Closed', []);
    mondayCloseFormControl = new FormControl('Closed', []);
    tuesdayOpenFormControl = new FormControl('Closed', []);
    tuesdayCloseFormControl = new FormControl('Closed', []);
    wednesdayOpenFormControl = new FormControl('Closed', []);
    wednesdayCloseFormControl = new FormControl('Closed', []);
    thursdayOpenFormControl = new FormControl('Closed', []);
    thursdayCloseFormControl = new FormControl('Closed', []);
    fridayOpenFormControl = new FormControl('Closed', []);
    fridayCloseFormControl = new FormControl('Closed', []);
    saturdayOpenFormControl = new FormControl('Closed', []);
    saturdayCloseFormControl = new FormControl('Closed', []);

    constructor() { }

    ngOnInit(): void {
        this.cities = cities;
        this.hours = hours;
    }

    savePage() {
        var a = this.telephoneFormControl;
    }

    resetPage() { 

    }
}
