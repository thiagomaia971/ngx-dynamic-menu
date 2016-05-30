import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IMenu } from './menu';

@Injectable()
export class MenuService{
    
    private _menuUrl: string = "api/menu/menu.json";
    
    constructor(private _http: Http){
    }
    
    getMenu(): Observable<IMenu[]>{
        return this._http.get(this._menuUrl)
              .map((response: Response) => <IMenu[]> response.json())
              .do(data => console.log('All: ' +  JSON.stringify(data)))
              .catch(this.handleError);
    }
    
    private handleError(error: Response){
        return Observable.throw(error.json().error || 'Server error');
    }
    
}