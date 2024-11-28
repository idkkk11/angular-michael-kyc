import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-container',
    templateUrl: './list-container.component.html',
    styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

    clients: any[] = [];

    constructor(private customerService: CustomerService, private router: Router) { }

    ngOnInit(): void {
        // Fetch data from the API when the component initializes
    this.customerService.getCustomers().subscribe(
        (data) => {
          this.clients = data;
          console.log('Customers fetched:', data);
        },
        (error) => {
          console.error('Error fetching customers:', error);
        }
      );
    }

    redirectNewClient() {
        this.router.navigate(['/new/client'])
    }

}
