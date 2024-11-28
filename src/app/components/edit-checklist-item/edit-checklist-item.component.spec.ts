import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChecklistItemComponent } from './edit-checklist-item.component';

describe('EditChecklistItemComponent', () => {
  let component: EditChecklistItemComponent;
  let fixture: ComponentFixture<EditChecklistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChecklistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChecklistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
