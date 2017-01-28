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

    constructor(
    private tvmazeService: TVMazeService,
    private showstorage: StorageService
    ){
        this.tvmService = tvmazeService;
        this.storage = showstorage;

        this.savedShows = showstorage.get();
    }

    searchShows(param:String) {
        this.tvmazeService.searchShows(param).subscribe((json: any) => {
            this.searched = json
        });
    }

    saveShow(show:any){
        this.savedShows.push(show);
        this.storage.put(this.savedShows);
    }
    
}
