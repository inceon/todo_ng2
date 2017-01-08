import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'reverse',
  pure: false
})

export class ReversePipe implements PipeTransform{
  transform(arr: any[]) {
    if(arr) {
      let copy = [...arr];

      return copy.reverse();
    }
  }
}
