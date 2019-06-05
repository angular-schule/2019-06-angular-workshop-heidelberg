import { NgModule, Input, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[brRepeat]'
})
export class DummyRepeatDirective {

  constructor(
  ) { }

  @Input()
  set brRepeat(times: number) {
  }
}


@NgModule({
  declarations: [
    DummyRepeatDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DummyRepeatDirective
  ]
})
export class BooksTestingModule { }
