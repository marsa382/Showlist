import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'genreFilter',
    pure: false
})

export class GenreFilterPipe implements PipeTransform {
    transform(items: any[], genre:String){
        if (!items) {
            return [];
        } else if (genre == "") {
            return items;
        }
        return items.filter(obj => obj.show.genres.indexOf(genre) > -1);
    }
}