import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChecklistItemComponent } from './new-checklist-item.component';

describe('NewChecklistItemComponent', () => {
  let component: NewChecklistItemComponent;
  let fixture: ComponentFixture<NewChecklistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChecklistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChecklistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
