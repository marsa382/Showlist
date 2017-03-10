import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    storageid = "showlister";

    get():any[]{
        return JSON.parse(localStorage.getItem(this.storageid) || '[]');
    }

    save(savedshows:any) {
        localStorage.setItem(this.storageid, JSON.stringify(savedshows));
    }

    filterWithGenre(genre:String):any[] {
        var items = JSON.parse(localStorage.getItem(this.storageid) || '[]');
        var ret = [];
        for(var i=0;i<items.length;i++){
            if (items[i].show.genres.indexOf(genre) > -1){
                ret.push(items[i]);
            }
        }
        return ret;
    }
}