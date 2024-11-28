import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCustomerChecklistComponent } from './detail-customer-checklist.component';

describe('DetailCustomerChecklistComponent', () => {
  let component: DetailCustomerChecklistComponent;
  let fixture: ComponentFixture<DetailCustomerChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCustomerChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCustomerChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
