import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColory]'
})
export class ColoryDirective {
  private counter: number = 0;

  @HostBinding('style.color') myColor: string;

  @HostListener('click', ['$event']) changeColor(event) {
    this.myColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.counter++;
    console.log(this.counter);
  }

  constructor() {
    this.myColor = 'red';

    setTimeout(() => {
      this.myColor = 'blue';
    }, 2000);
  }

}
