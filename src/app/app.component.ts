import { Component } from '@angular/core';

export interface ICars {
    id: number;
    year: number;
    make: string;
    model: string;
    color: string;
    desc: string;
    ascSort?: boolean;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ng12grid';

    cars: ICars[] = [
        { id: 1, year: 1999, make: 'Honda', model: 'Civic', color: 'white', desc: 'aaaa dkjhaa ka aka kakj kja kak kak akkkhaakj aa akjak akj' },
        { id: 2, year: 2015, make: 'Ford', model: 'Escort', color: 'red', desc: 'bbb ljlj bbbuiyb bljbljbiy b blj blj lbb lbb ljbbbb bljljljoib' },
        { id: 3, year: 1960, make: 'Jeep', model: 'Wrangler', color: 'red', desc: 'ccc ci ciyicuc iictc cic cc iiyc iic icitc.' },
    ];

    sortState: any = {
        year: 'asc',
        make: 'asc',
        model: 'asc',
    }

    sortBy(prop: any) {
        prop = prop.toLowerCase();

        if (this.sortState[prop] === 'asc') {
            console.log(prop, 'asc')
            this.cars?.sort((a: any, b: any) => (a[prop] > b[prop]) ? 1 : ((b[prop] > a[prop]) ? -1 : 0));
            this.sortState[prop] = 'des';
        } else {
            console.log(prop, 'des')
            this.cars?.sort((a: any, b: any) => (a[prop] < b[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0));
            this.sortState[prop] = 'asc';
        }
    }
}

//sort
// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value