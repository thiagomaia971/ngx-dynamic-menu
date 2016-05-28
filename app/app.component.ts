import { Component, OnInit } from '@angular/core';
import { MontarMenuComponent } from './menu/menu.component';
import { HTTP_PROVIDERS } from '@angular/http'
import 'rxjs/Rx';   // Load all features
import { MenuService } from './menu/menu.service';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [MontarMenuComponent],
    providers: [HTTP_PROVIDERS, MenuService]
})

export class AppComponent implements OnInit {
    constructor() { 
        
    }

    ngOnInit() {
    }

}