import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
    selector: 'app-list-container',
    templateUrl: './list-container.component.html',
    styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

    // clients = [
    //     {
    //         firstName: 'John',
    //         lastName: 'Doe',
    //         email: 'johndoe@gmail.com',
    //         phone: '+44 1234 567890',
    //         status: 'In Progress'
    //     },
    //     {
    //         firstName: 'Jane',
    //         lastName: 'Smith',
    //         email: 'janesmith@gmail.com',
    //         phone: '+44 9876 543210',
    //         status: 'Completed'
    //     }
    // ];

    clients: any[] = [];

    constructor(private customerService: CustomerService) { }

    ngOnInit(): void {
        // Fetch data from the API when the component initializes
    this.customerService.getCustomers().subscribe(
        (data) => {
          this.clients = data;
          console.log('Customers fetched:', data); // Debugging
        },
        (error) => {
          console.error('Error fetching customers:', error);
        }
      );
    }

}
