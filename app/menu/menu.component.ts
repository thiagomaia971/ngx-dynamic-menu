import { Component, OnInit, Input } from '@angular/core';

import { MenuService } from './menu.service';
import { IMenu } from './menu';

@Component({
    selector: 'montar-menu',
    templateUrl: './app/menu/menu.component.html',
    styleUrls: ['./app/menu/menu.component.css'],
    directives: [MontarMenuComponent]
})

export class MontarMenuComponent implements OnInit {
    @Input() 
    menu: IMenu;
    
    @Input()
    isChildren: boolean;
    
    constructor() {
        
     }

    ngOnInit() { 
    }

}