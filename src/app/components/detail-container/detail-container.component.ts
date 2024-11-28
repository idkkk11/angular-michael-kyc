import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-detail-container',
    templateUrl: './detail-container.component.html',
    styleUrls: ['./detail-container.component.css']
})
export class DetailContainerComponent implements OnInit {
    checklistItems: any[] = [];
    customerId: number | null = null;

    constructor(private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.customerId = Number(params.get('id'));

            // Make the API call using the customer ID
            if (this.customerId) {
                this.http
                    .get(`http://localhost:8080/api/checklistItems/customer/${this.customerId}`)
                    .subscribe(
                        (response: any) => {
                            this.checklistItems = response;
                            console.log(response)
                        },
                        error => {
                            console.error('Error fetching checklist items:', error);
                        }
                    );
            }
        });
    }

}
