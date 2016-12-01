import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MontarMenuComponent } from "./menu/menu.component";

import { ItemMenuPaiDirective } from "./menu/menu.directive";

import { UnitOfWork } from "../repositories/UnitOfWork";
import { ItemMenuRepository } from "../repositories/ItemMenuRepository";

@NgModule({
  declarations: [
    AppComponent,
    MontarMenuComponent,
    ItemMenuPaiDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ItemMenuRepository, UnitOfWork],
  bootstrap: [AppComponent]
})

export class AppModule { }
