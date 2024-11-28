import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-customer-checklist-row',
  templateUrl: './detail-customer-checklist-row.component.html',
  styleUrls: ['./detail-customer-checklist-row.component.css']
})
export class DetailCustomerChecklistRowComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  @Input() checklistItem: any;

  openCompleteDialog() {
    const completedBy = prompt('Who marked this item as complete?');
    if (completedBy) {
      this.markItemAsComplete(completedBy);
    }
  }

  markItemAsComplete(completedBy: string) {
    const url = `http://localhost:8080/api/checklistItems/complete/${this.checklistItem.id}`;
    const body = { completedBy };

    this.http.put(url, body).subscribe(
      response => {
        console.log('Item marked as complete:', response);
        window.location.reload();
      },
      error => {
        console.error('Error marking item as complete:', error);
        alert('Failed to mark the item as complete.');
      }
    );
  }

  markItemAsInComplete() {
    const url = `http://localhost:8080/api/checklistItems/incomplete/${this.checklistItem.id}`;

    this.http.put(url, {}).subscribe(
      response => {
        console.log('Item marked as incomplete:', response);
        window.location.reload();
      },
      error => {
        console.error('Error marking item as incomplete:', error);
        alert('Failed to mark the item as incomplete.');
      }
    );
  }

  deleteItem() {
    const url = `http://localhost:8080/api/checklistItems/delete/${this.checklistItem.id}`;

    this.http.delete(url, { responseType: 'text' }).subscribe(
      response => {
        console.log('Deleted Item:', response);
        window.location.reload();
      },
      error => {
        console.error('Error deleting item:', error);
        alert('Failed to delete item.');
      }
    );
  }

  redirectEditItem(id: string) {
    this.router.navigate(['/edit/checklist-item', id])
  }

}
