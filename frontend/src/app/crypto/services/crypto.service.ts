import {Subject} from "rxjs/internal/Subject";
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Currencies} from "../models/currencies.model";


@Injectable()
export class CryptoService {
    private currenciesUrl = "/api/currencies";

    private currencies: Currencies = new Currencies();

    private currenciesSubject = new Subject();

    currencyChanged = this.currenciesSubject.asObservable();

    constructor(private http: HttpClient) {
    }

    getAllCurrencies() {
        return this.http.get(this.currenciesUrl);
    }

    set Currencies(value: Currencies) {
        this.currencies = value;
        this.currenciesSubject.next();
    }

    get Currencies() {
        return this.currencies;
    }

}
