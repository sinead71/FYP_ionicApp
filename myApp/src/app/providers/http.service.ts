import { Injectable } from  '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2'

@Injectable()
export class HttpService{
    fbId: FirebaseObjectObservable<any>;

    constructor(public af: AngularFire, private http: Http){}  

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

    getDetailsId(id){
        this.fbId = this.af.database.object('/message'+id) as FirebaseObjectObservable<any>;
        return this.fbId;
        //console.log(fbId);
    }
    
}