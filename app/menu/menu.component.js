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
var menu_service_1 = require('./menu.service');
var MontarMenuComponent = (function () {
    function MontarMenuComponent(_menuService) {
        this._menuService = _menuService;
    }
    MontarMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._menuService.getMenu()
            .subscribe(function (menu) { return _this.menu = menu; }, function (error) { return _this.errors = error; });
    };
    MontarMenuComponent = __decorate([
        core_1.Component({
            selector: 'montar-menu',
            templateUrl: './app/menu/menu.component.html',
            styleUrls: ['./app/menu/menu.component.css']
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuService])
    ], MontarMenuComponent);
    return MontarMenuComponent;
}());
exports.MontarMenuComponent = MontarMenuComponent;
//# sourceMappingURL=menu.component.js.map