import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-customer-checklist',
  templateUrl: './detail-customer-checklist.component.html',
  styleUrls: ['./detail-customer-checklist.component.css']
})
export class DetailCustomerChecklistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() checklist: any; // Receive data from parent

}
