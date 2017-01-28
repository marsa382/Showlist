import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    storageid = "showlister";

    get():any []{
        return JSON.parse(localStorage.getItem(this.storageid) || '[]');
    }

    put(savedshows:any) {
        localStorage.setItem(this.storageid, JSON.stringify(savedshows));
    }
}