import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCustomerChecklistRowComponent } from './detail-customer-checklist-row.component';

describe('DetailCustomerChecklistRowComponent', () => {
  let component: DetailCustomerChecklistRowComponent;
  let fixture: ComponentFixture<DetailCustomerChecklistRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCustomerChecklistRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCustomerChecklistRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
