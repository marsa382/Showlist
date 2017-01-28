import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TVMazeService {

    constructor (private http: Http) {}

    searchShows(param:String):Observable<any>{
        var url = 'http://api.tvmaze.com/search/shows?q=' + param;
        return this.http.get(url).map((res: Response) => res.json());
    }
}