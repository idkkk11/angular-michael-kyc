import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-new-checklist-item',
    templateUrl: './new-checklist-item.component.html',
    styleUrls: ['./new-checklist-item.component.css']
})
export class NewChecklistItemComponent implements OnInit {

    customerId: string | null = null;

    newChecklistItem = {
        title: '',
        description: '',
    };

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
        this.customerId = this.route.snapshot.paramMap.get('id'); // Get customer ID from route
    }

    ngOnInit(): void {
    }

    onSubmit() {
        const url = `http://localhost:8080/api/checklistItems/customer/${this.customerId}`;
        this.http.post(url, this.newChecklistItem).subscribe(
          (response) => {
            console.log('Checklist item created:', response);
            alert('Checklist item created successfully!');
            this.newChecklistItem = { title: '', description: '' }; // Reset form
            this.router.navigate([`/customer/${this.customerId}`])
          },
          (error) => {
            console.error('Error creating checklist item:', error);
            alert('Failed to create checklist item.');
          }
        );
      }

}
