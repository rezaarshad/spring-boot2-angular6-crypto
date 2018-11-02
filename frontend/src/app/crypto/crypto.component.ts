import {Component, OnInit, ViewChild} from '@angular/core';
import {CurrenciesComponent} from "./currencies/currencies.component";

@Component({
    selector: 'app-crypto',
    templateUrl: './crypto.component.html',
    styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {
    private collapsed = true;

    @ViewChild('currenciesComponent')
    currenciesComponent: CurrenciesComponent;

    constructor() {
    }

    ngOnInit() {
    }

    toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
    }

    reset() {
    }
}
