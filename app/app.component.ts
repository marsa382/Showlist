import { Component } from '@angular/core';
import { TVMazeService } from './services/tvmaze.service';
import { StorageService } from './services/storage.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [TVMazeService, StorageService]
})

export class AppComponent  {

    searched:any;
    savedShows:any[] = [];
    tvmService:TVMazeService;
    storage:StorageService;
    showDropdown = false;
    error = false;
    showname = ""; //display on error message

    constructor(
    private tvmazeService: TVMazeService,
    private showstorage: StorageService
    ){
        this.tvmService = tvmazeService;
        this.storage = showstorage;

        this.savedShows = showstorage.get();
    }

    searchShows(param:String) {
        this.showDropdown = true;
        this.tvmazeService.searchShows(param).subscribe((json: any) => {
            this.searched = json
        });
    }

    saveShow(show:any){

        if (!this.contains(show)) {
            this.showDropdown = false;
            this.savedShows.push(show);
            this.storage.save(this.savedShows);
        } else {
            this.showDropdown = false;
            this.error = true;
            this.showname = show.show.name;
        }
        
    }

    deleteShow(index:number) {
        this.savedShows.splice(index, 1);
        this.storage.save(this.savedShows);
    }

    contains(obj:any) {
    var i = this.savedShows.length;
    while (i--) {
       if (this.savedShows[i].show.id === obj.show.id) {
           return true;
       }
    }
    return false;
}
    
}
