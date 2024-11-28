import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-checklist-item',
  templateUrl: './edit-checklist-item.component.html',
  styleUrls: ['./edit-checklist-item.component.css']
})
export class EditChecklistItemComponent implements OnInit {

    checklistItemId: string | null = null;

    response: any = null

    currentChecklistItem = {
        title: '',
        description: '',
    };

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.checklistItemId = params.get('id');

        // Make the API call using the customer ID
        if (this.checklistItemId) {
            this.http
                .get(`http://localhost:8080/api/checklistItems/${this.checklistItemId}`)
                .subscribe(
                    (response: any) => {
                        this.currentChecklistItem.title = response.title;
                        this.currentChecklistItem.description = response.description
                        this.response = response
                    },
                    error => {
                        console.error('Error fetching checklist items:', error);
                    }
                );
        }
    });
  }

  onSubmit() {
    const url = `http://localhost:8080/api/checklistItems/update/${this.checklistItemId}`;
    this.http.put(url, this.currentChecklistItem).subscribe(
      (response) => {
        console.log('Checklist item edited:', response);
        alert('Checklist item updated successfully!');
        this.currentChecklistItem = { title: '', description: '' }; // Reset form
        this.router.navigate([`/customer/${this.response.customer.id}`])
      },
      (error) => {
        console.error('Error creating checklist item:', error);
        alert('Failed to create checklist item.');
      }
    );
  }

}
