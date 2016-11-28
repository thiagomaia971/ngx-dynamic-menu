import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';   // Load all features

import { ItemMenu } from "../domain/ItemMenu";
import { UnitOfWork } from "../repositories/UnitOfWork";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  private itensMenu: ItemMenu[];

  constructor(private unitOfWork: UnitOfWork) {

  }

  public ngOnInit(): void {
    console.log("test");

    this.unitOfWork.ItensMenu.getAll()
      .subscribe(
      menu => {
        this.itensMenu = menu;
        console.log(this.itensMenu);
      },
      error => console.info("Error")
      );
  }

}
