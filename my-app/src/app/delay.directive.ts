import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit {
  @Input() appDelay: number;

  constructor(
    private templale: TemplateRef<any>,
    private view: ViewContainerRef
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.view.createEmbeddedView(this.templale);
    }, this.appDelay * 1000);
  }
}
