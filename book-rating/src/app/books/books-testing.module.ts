import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeatDirective } from './shared/repeat.directive';

@NgModule({
  declarations: [
    RepeatDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
     // TODO: hier ersetzen mit einer Direktive die nix tut
    RepeatDirective
  ]
})
export class BooksTestingModule { }
