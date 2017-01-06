import { Injectable } from '@angular/core';
import {Item} from "../types/item.type";
import {ITEMS} from "../data/items.mock";

@Injectable()
export class ItemsService {

    getItems(): Promise<Item[]> {
      return Promise.resolve(ITEMS);
    }

}
