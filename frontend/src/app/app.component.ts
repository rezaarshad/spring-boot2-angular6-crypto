import {Component} from '@angular/core';
import {CryptoService} from "./crypto/services/crypto.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CryptoService]
})
export class AppComponent {

}
