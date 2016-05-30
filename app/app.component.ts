import { Component, OnInit } from '@angular/core';
import { MontarMenuComponent } from './menu/menu.component';
import { HTTP_PROVIDERS } from '@angular/http'
import 'rxjs/Rx';   // Load all features
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteDefinition } from '@angular/router-deprecated';
import { Injectable } from '@angular/core';

import { MenuService } from './menu/menu.service';
import { IMenu } from './menu/menu';
import { PerfilComponent } from './perfil/perfil.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [MontarMenuComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, MenuService]
})

//@RouteConfig(this.routers)

@Injectable()
export class AppComponent implements OnInit {
    private routers: RouteDefinition[] =[];
    private menus: IMenu[] = [];
    
    constructor(private _menuService: MenuService) { 
        
    }

    ngOnInit() {
        
        this._menuService.getMenu()
                .subscribe(
                    menu => this.menus = menu,
                    error => console.info("Error")
                );
        
        console.info(this.menus);
        
        this.menus.forEach(x => 
            this.routers.push({
                path: x.Action, name: x.Nome, component: PerfilComponent
            })
        );
        
        console.info(this.routers);
        
    }

}