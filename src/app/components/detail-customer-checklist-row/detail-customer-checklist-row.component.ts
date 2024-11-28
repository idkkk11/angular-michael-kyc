import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-customer-checklist-row',
  templateUrl: './detail-customer-checklist-row.component.html',
  styleUrls: ['./detail-customer-checklist-row.component.css']
})
export class DetailCustomerChecklistRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() checklistItem: any;

}
