import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from "./app.component";
import {CurrenciesComponent} from "./crypto/currencies/currencies.component";
import {CryptoService} from "./crypto/services/crypto.service";
import {CryptoComponent} from "./crypto/crypto.component";
import {WebSocketService} from "./crypto/services/websocket.service";

@NgModule({
    declarations: [
        AppComponent,
        CryptoComponent,
        CurrenciesComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [CryptoService, WebSocketService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
