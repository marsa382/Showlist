"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const tvmaze_service_1 = require("./services/tvmaze.service");
const storage_service_1 = require("./services/storage.service");
let AppComponent = class AppComponent {
    constructor(tvmazeService, showstorage) {
        this.tvmazeService = tvmazeService;
        this.showstorage = showstorage;
        this.savedShows = [];
        this.tvmService = tvmazeService;
        this.storage = showstorage;
        this.savedShows = showstorage.get();
    }
    searchShows(param) {
        this.tvmazeService.searchShows(param).subscribe((json) => {
            this.searched = json;
        });
    }
    saveShow(show) {
        this.savedShows.push(show);
        this.storage.put(this.savedShows);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        providers: [tvmaze_service_1.TVMazeService, storage_service_1.StorageService]
    }),
    __metadata("design:paramtypes", [tvmaze_service_1.TVMazeService,
        storage_service_1.StorageService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map