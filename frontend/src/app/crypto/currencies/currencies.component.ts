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
    total: number;
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

            // Subscribe to notification topic
            stompClient.subscribe('/topics/currency', notifications => {

                // Update notifications attribute with the recent messsage sent from the server
                this.currencies = JSON.parse(notifications.body);
            })
        });
        // this.cryptoService.connect();
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
                },
                (error) => console.log(error)
            );
    }
}
