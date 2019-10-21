import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class loginService{

    constructor(private _http: HttpClient){

    }

    getForecastData() {
        this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=707860&APPID=6e096cf52f89272d7229de4db44e9483')
        .subscribe(value => {
            console.log(value);
        }, error => {
            console.log(error);
        });
    }

}