import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IRepository } from "./IRepository";
import { ItemMenu } from "../domain/ItemMenu";

@Injectable()
export class ItemMenuRepository extends IRepository<ItemMenu>{

    constructor(private _http: Http){
        super();
    }

    public getSingle(): Observable<ItemMenu> {
        return null;        
    }

     public getAll(): Observable<ItemMenu[]> {
        let _url: string = `${this.url}/menu/menu.json`;
        return this._http.get(_url)
            .map((response: Response) => <ItemMenu[]> response.json())
    }

}