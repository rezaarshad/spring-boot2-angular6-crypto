import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs/internal/Subscription";
import {CryptoService} from "../services/crypto.service";
import {Currency} from "../models/currency.model";
import {WebSocketService} from "../services/websocket.service";

@Component({
    selector: 'app-currencies',
    templateUrl: './currencies.component.html',
    styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
    currencies: Currency[]=[];
    lastUpdate: string;
    paid: boolean;
    sub: Subscription;

    constructor(private cryptoService: CryptoService, private webSocketService: WebSocketService) {

    }

    ngOnInit() {
        this.paid = false;
        this.currencies=[];
        this.loadCurrencies();
        // Open connection with server socket
        let stompClient = this.webSocketService.connect();
        stompClient.connect({}, frame => {

            // Subscribe to currency topic
            stompClient.subscribe('/topics/currency', currencies => {
                this.currencies = JSON.parse(currencies.body);
                this.lastUpdate=(new Date()).toLocaleTimeString();
            })
        });
    }

    pay() {
        this.paid = true;
    }

    loadTotal() {
    }

    loadCurrencies() {
        this.cryptoService.getAllCurrencies()
            .subscribe(
                (currencies: any[]) => {
                    this.currencies = currencies;
                    this.lastUpdate=(new Date()).toLocaleTimeString();
                },
                (error) => console.log(error)
            );
    }
}
