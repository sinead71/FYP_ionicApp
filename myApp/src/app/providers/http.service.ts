import { Injectable } from  '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService{
    constructor(private http: Http){}  

    getData(){
        return this.http.get('https://fypionic.firebaseio.com/NewMessage.json')
            .map((response: Response) => response.json()); 
    }  

    sendDate(message: any){
        const body = JSON.stringify(message);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://fypionic.firebaseio.com/NewMessage.json', body, {
            headers: headers
        })
            .map((data: Response) => data.json());
    }
    
}