import {Component, Input} from '@angular/core';
import {Item} from "../types/item.type";

@Component({
    moduleId: module.id,
    selector: 'item',
    templateUrl: './item.component.html'
})
export class ItemComponent {
  @Input() data: Item;
}
