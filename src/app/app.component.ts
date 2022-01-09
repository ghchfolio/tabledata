import { Component } from '@angular/core';

export interface ICars {
    Id: number;
    Year: number;
    Make: string;
    Model: string;
    Color: string;
    Desc: string;
    ascSort?: boolean;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    cars: ICars[] = [
        { Id: 1, Year: 1999, Make: 'Honda', Model: 'Civic', Color: 'white', Desc: 'aaaa dkjhaa ka aka kakj kja kak kak akkkhaakj aa akjak akj' },
        { Id: 2, Year: 2015, Make: 'Ford', Model: 'Escort', Color: 'red', Desc: 'bbb ljlj bbbuiyb bljbljbiy b blj blj lbb lbb ljbbbb bljljljoib' },
        { Id: 3, Year: 1960, Make: 'Jeep', Model: 'Wrangler', Color: 'blue', Desc: 'ccc ci ciyicuc iictc cic cc iiyc iic icitc.' },
    ];

    sortedBy = 'none';
    sortState: any = {
        Year: 'asc',
        Make: 'asc',
        Model: 'asc',
        Color: 'asc',
        Desc: 'asc',
    }

    sortBy(prop: any) {
        if (typeof (prop) === 'string') this.sortedBy = prop;

        if (this.sortState[prop] === 'asc') {
            this.cars?.sort((a: any, b: any) => (a[prop] > b[prop]) ? 1 : ((b[prop] > a[prop]) ? -1 : 0));
            this.sortState[prop] = 'des';
        } else {
            this.cars?.sort((a: any, b: any) => (a[prop] < b[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0));
            this.sortState[prop] = 'asc';
        }
    }
}

//sort
// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value