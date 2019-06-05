import { Directive, Input, TemplateRef, ViewContainerRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[brRepeat]'
})
export class RepeatDirective {

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) { }

  @Input()
  set brRepeat(times: number) {
    this.container.clear();
    for (let i = 0; i < times; i++) {
      this.container.createEmbeddedView(this.template);
    }
  }
}
