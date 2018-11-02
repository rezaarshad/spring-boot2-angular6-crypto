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

    private ws: WebSocket;
    public url: string;

    private total: number;

    currencyChanged = this.currenciesSubject.asObservable();

    constructor(private http: HttpClient) {
    }

    connect() {
        this.url = "ws://" + window.location.host + "/crypto-ws/websocket";
        // this.ws = new $WebSocket(this.url);

        // set received message callback
        // this.ws.onOpen(
        //     (msg) => {
        //         console.log(msg);
        //
        //         this.ws.getDataStream().subscribe(
        //             res => {
        //                 console.log(res);
        //             },
        //             function (e) {
        //                 console.log('Error: ' + e.message);
        //             },
        //             function () {
        //                 console.log('Completed');
        //             }
        //         );
        //
        //         this.ws.send("CONNECT\naccept-version:1.1\nheart-beat:10000,10000\n\n\0").subscribe(
        //             (msg)=> {
        //                 console.log("next", msg.data);
        //             },
        //             (msg)=> {
        //                 console.log("error", msg);
        //             },
        //             ()=> {
        //                 console.log("complete");
        //             }
        //         );
        //
        //         var topic = "/topics/currency";
        //         console.log(topic);
        //
        //         this.ws.send("SUBSCRIBE\nid:sub-001\ndestination:" + topic + "\n\n\0").subscribe(
        //             (msg)=> {
        //                 console.log("next", msg.data);
        //             },
        //             (msg)=> {
        //                 console.log("error", msg);
        //             },
        //             ()=> {
        //                 console.log("complete");
        //             }
        //         );
        //
        //     });
        //
        // // set received message callback
        // this.ws.onMessage(
        //     (msg: MessageEvent) => {
        //         console.log("onMessage ", msg.data);
        //     },
        //     {autoApply: false}
        // );
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
