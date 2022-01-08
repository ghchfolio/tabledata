import { Component } from '@angular/core';

export interface ICars {
    year: number;
    make: string;
    model: string;
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ng12grid';

    cars: ICars[] = [
        { 'year': 1999, 'make': 'Honda', 'model': 'Civic' },
        { 'year': 2005, 'make': 'Jeep', 'model': 'Wrangler' },
        { 'year': 2007, 'make': 'Subaru', 'model': 'WRX' },
    ]
}
