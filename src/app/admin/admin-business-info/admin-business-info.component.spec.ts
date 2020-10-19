import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBusinessInfoComponent } from './admin-business-info.component';

describe('AdminBusinessInfoComponent', () => {
  let component: AdminBusinessInfoComponent;
  let fixture: ComponentFixture<AdminBusinessInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBusinessInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBusinessInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
