import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCustomerInfoComponent } from './detail-customer-info.component';

describe('DetailCustomerInfoComponent', () => {
  let component: DetailCustomerInfoComponent;
  let fixture: ComponentFixture<DetailCustomerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCustomerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
