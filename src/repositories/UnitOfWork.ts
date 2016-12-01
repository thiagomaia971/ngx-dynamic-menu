import { Injectable } from '@angular/core';
import { ItemMenuRepository } from "./ItemMenuRepository"; 

@Injectable()
export class UnitOfWork{
    
    public ItensMenu:  ItemMenuRepository;

    constructor(_itemMenuRepository: ItemMenuRepository){
        this.ItensMenu = _itemMenuRepository;
    }

}