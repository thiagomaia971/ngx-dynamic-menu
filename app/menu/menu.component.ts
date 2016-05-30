import { Component, OnInit, Input } from '@angular/core';

import { MenuService } from './menu.service';
import { IMenu } from './menu';

@Component({
    selector: 'montar-menu',
    templateUrl: './app/menu/menu.component.html',
    styleUrls: ['./app/menu/menu.component.css']
})

export class MontarMenuComponent implements OnInit {
    menu: IMenu[];
    errors: string;
    
    constructor(private _menuService: MenuService) {
        
     }

    ngOnInit() { 
        this._menuService.getMenu()
                .subscribe(
                    menu => this.menu = menu,
                    error => this.errors = error
                );
            
    }

}