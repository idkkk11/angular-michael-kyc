import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCustomerChecklistHeaderComponent } from './detail-customer-checklist-header.component';

describe('DetailCustomerChecklistHeaderComponent', () => {
  let component: DetailCustomerChecklistHeaderComponent;
  let fixture: ComponentFixture<DetailCustomerChecklistHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCustomerChecklistHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCustomerChecklistHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
