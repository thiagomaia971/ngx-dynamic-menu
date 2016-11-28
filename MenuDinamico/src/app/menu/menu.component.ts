import { Component, OnInit, Input } from '@angular/core';

//import { MenuService } from './menu.service';

import { ItemMenu } from '../../domain/ItemMenu';

@Component({
    selector: 'montar-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MontarMenuComponent implements OnInit {
    @Input() menu: ItemMenu;
    
    @Input()
    isChildren: boolean;
    
    constructor() {
        
     }

    ngOnInit() { 
    }

}