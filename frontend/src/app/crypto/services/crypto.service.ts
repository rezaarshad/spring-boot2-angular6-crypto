import {Subject} from "rxjs/internal/Subject";
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Currencies} from "../models/currencies.model";
// import {$WebSocket, WebSocketSendMode} from 'angular2-websocket/angular2-websocket';


@Injectable()
export class CryptoService {
    private currenciesUrl = "/api/currencies";

    private currencies: Currencies = new Currencies();

    private currenciesSubject = new Subject();

    private total: number;

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
