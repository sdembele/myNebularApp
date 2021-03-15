import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timing'
})
export class TimingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
