import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ShowListComponent } from './app.showlist';

import { GenreFilterPipe } from './genrefilter.pipe';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule, FormsModule ],
  declarations: [ AppComponent, ShowListComponent, GenreFilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
