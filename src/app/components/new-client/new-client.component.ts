import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
    newClient = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
      };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.post('http://localhost:8080/api/customers', this.newClient).subscribe(
      (response) => {
        console.log('Client created:', response);
        alert('Client created successfully!');
        this.newClient = { firstName: '', lastName: '', email: '', phone: '', address: '' }; // Reset form
        this.router.navigate(['/'])
      },
      (error) => {
        console.error('Error creating client:', error);
        alert('Failed to create client.');
      }
    );
  }

}
