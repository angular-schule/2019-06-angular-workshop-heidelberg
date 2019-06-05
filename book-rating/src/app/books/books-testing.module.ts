import { NgModule, Input, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeatDirective } from './shared/repeat.directive';

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
    RepeatDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DummyRepeatDirective
  ]
})
export class BooksTestingModule { }
