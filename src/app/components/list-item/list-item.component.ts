import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
    @Input() client: any;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    goToCustomerDetail(id: number) {
        this.router.navigate(['/customer', id])
    }

}
