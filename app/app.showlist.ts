import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
    selector: 'showlist',
    templateUrl: 'app/app.showlist.html',
    providers: [StorageService]
})

export class ShowListComponent {
    @Input() allSaved:any[];
    @Input() storage:StorageService;
    @Output() notify: EventEmitter<number> = new EventEmitter<number>();

    filtered:Boolean = false;
    genreText:String = "";

    onDelete(index:number){
        this.notify.emit(index);
    }

    emptyFilter() {
        this.filtered = false;
        this.genreText = "";

        //app.showlist.html: <tr *ngFor="let x of allSaved; let i = index;">
        //this.allSaved = this.storage.get();
    }

    filterWithGenre(genre:String) {
        this.filtered = true;
        this.genreText = genre;

        //this filters shows from storage
        //this.allSaved = this.storage.filterWithGenre(genre);
    }
}