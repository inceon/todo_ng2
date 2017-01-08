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
var core_1 = require('@angular/core');
var items_service_1 = require("./service/items.service");
var AppComponent = (function () {
    function AppComponent(itemsService) {
        this.itemsService = itemsService;
        this.addWindow = false;
    }
    AppComponent.prototype.action = function (command) {
        if (command === "add") {
            this.addWindow = !this.addWindow;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsService
            .getItems()
            .then(function (res) { return _this.items = res; });
    };
    AppComponent.prototype.submit = function (form) {
        this.itemsService
            .addItem(form.value)
            .then(function (res) { return form.reset(); });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            providers: [items_service_1.ItemsService],
        }), 
        __metadata('design:paramtypes', [items_service_1.ItemsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map