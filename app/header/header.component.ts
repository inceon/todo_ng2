import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'header',
  templateUrl: 'app/header/header.template.html'
})
export class HeaderComponent{
  @Output() onAction = new EventEmitter<string>();
  action(command: string) {
    this.onAction.emit(command);
  }
}
