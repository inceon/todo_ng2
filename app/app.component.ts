import {Component, OnInit} from '@angular/core';
import {ItemsService} from "./service/items.service";
import {Item} from "./types/item.type";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [ItemsService]
})
export class AppComponent implements OnInit{

  addWindow: boolean = false;
  items: Item[];

  constructor(private itemsService: ItemsService){}

  action(command: string) {
    if(command === "add") {
      this.addWindow = !this.addWindow;
    }
  }

  ngOnInit() {
    this.itemsService
      .getItems()
      .then(res => this.items = res);
  }
}
