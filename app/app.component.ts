import { Component, OnInit } from '@angular/core';
import { MontarMenuComponent } from './menu/menu.component';
import { HTTP_PROVIDERS } from '@angular/http'
import 'rxjs/Rx';   // Load all features
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { MenuService } from './menu/menu.service';



@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [MontarMenuComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, MenuService]
})
@RouteConfig(this.test)


export class AppComponent implements OnInit {
    routers: any[];
    
    constructor() { 
        //this.routers.
    }

    ngOnInit() {
    }

}