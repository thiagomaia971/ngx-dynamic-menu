import { Observable } from 'rxjs/Observable';

export abstract class IRepository<T>{
    
    protected url: string = "api/";

    public abstract getSingle(): Observable<T>;
    public abstract getAll(): Observable<T[]>;
}