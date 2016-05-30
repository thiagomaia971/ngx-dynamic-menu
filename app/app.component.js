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
var menu_component_1 = require('./menu/menu.component');
var http_1 = require('@angular/http');
require('rxjs/Rx'); // Load all features
var router_deprecated_1 = require('@angular/router-deprecated');
var core_2 = require('@angular/core');
var menu_service_1 = require('./menu/menu.service');
var perfil_component_1 = require('./perfil/perfil.component');
var AppComponent = (function () {
    function AppComponent(_menuService) {
        this._menuService = _menuService;
        this.routers = [];
        this.menus = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._menuService.getMenu()
            .subscribe(function (menu) { return _this.menus = menu; }, function (error) { return console.info("Error"); });
        console.info(this.menus);
        this.menus.forEach(function (x) {
            return _this.routers.push({
                path: x.Action, name: x.Nome, component: perfil_component_1.PerfilComponent
            });
        });
        console.info(this.routers);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [menu_component_1.MontarMenuComponent, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, menu_service_1.MenuService]
        }),
        core_2.Injectable(), 
        __metadata('design:paramtypes', [menu_service_1.MenuService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map