import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    // cars vars
    cars = [
        { Id: 1, Year: 1999, Make: 'Honda', Model: 'Civic', Color: 'White', Desc: 'aaaa dkjhaa ka aka kakj kja kak kak akkkhaakj aa akjak akj' },
        { Id: 2, Year: 2015, Make: 'Ford', Model: 'Escort', Color: 'Red', Desc: 'bbb ljlj bbbuiyb bljbljbiy b blj blj lbb lbb ljbbbb bljljljoib' },
        { Id: 3, Year: 1960, Make: 'Jeep', Model: 'Wrangler', Color: 'Blue', Desc: 'ccc ci ciyicuc iictc cic cc iiyc iic icitc.' },
    ];
    carsSortState: any = {}
    carsSortedBy = 'none';

    // books vars
    booksData = [
        { Id: 1, Title: 'Green Eggs', Author: 'Dr. Sauss', Published: 1980, Category: 'Kid Stories' },
        { Id: 2, Title: 'No Beef for Wellington', Author: 'Bergermeister', Published: 2018, Category: 'Cooking' },
        { Id: 3, Title: 'WD40 Your Life', Author: 'Arthur Bahn', Published: 2000, Category: 'Autmotive' },
    ];
    booksSortState: any = {}
    booksSortedBy = 'none';

    ngOnInit(): void {
        this.initSortState(this.carsSortState, this.cars);
        this.initSortState(this.booksSortState, this.booksData);
    }

    initSortState(obj: any, arr: any[]) {
        const keys = Object.keys(arr[0]);
        keys.forEach(k => obj[k] = 'asc');
    }

    sortBy(prop: any, sortedBy: string, sortState: any, data: any[]) {
        if (typeof (prop) === 'string') sortedBy = prop;
        if (sortState[prop] === 'asc') {
            data.sort((a: any, b: any) => (a[prop] > b[prop]) ? 1 : ((b[prop] > a[prop]) ? -1 : 0));
            sortState[prop] = 'des';
        } else {
            data.sort((a: any, b: any) => (a[prop] < b[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0));
            sortState[prop] = 'asc';
        }
    }
}
