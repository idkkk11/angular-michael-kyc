import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-customer-checklist',
  templateUrl: './detail-customer-checklist.component.html',
  styleUrls: ['./detail-customer-checklist.component.css']
})
export class DetailCustomerChecklistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @Input() checklist: any; @Input() customerId: string; // Receive data from parent

  redirectNewChecklistItem(id: string) {
    this.router.navigate(['/new/checklist-item', id])
  }

}
