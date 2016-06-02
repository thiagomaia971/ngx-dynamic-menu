import { Component, OnInit } from '@angular/core';
import { MontarMenuComponent } from './menu/menu.component';
import { HTTP_PROVIDERS } from '@angular/http'
import 'rxjs/Rx';   // Load all features
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteDefinition } from '@angular/router-deprecated';

import { MenuService } from './menu/menu.service';
import { IMenu } from './menu/menu';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [MontarMenuComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, MenuService]
})

@RouteConfig([
    { name: "Home", path: "/", component: HomeComponent }
])

export class AppComponent implements OnInit {
    private menus: IMenu[] = [];
    private _menuService: MenuService;
    
    constructor(private menuService: MenuService) { 
        this._menuService = menuService;
    }

    ngOnInit() {
        
        this._menuService.getMenu()
                .subscribe(
                    menu => this.menus = menu,
                    error => console.info("Error")
                );
    }

}