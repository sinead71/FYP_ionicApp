import { Injectable } from  '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService{
    constructor(private http: Http){}  

    getData(){
        return this.http.get('https://fypionic.firebaseio.com/NewMessage.json')
            .map((response: Response) => response.json()); 
    }  
}