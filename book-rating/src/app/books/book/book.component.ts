import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: Book;

  @Output() rateDown = new EventEmitter<Book>();
  @Output() rateUp = new EventEmitter<Book>();

  doRateDown() {
    this.rateDown.next(this.book);
  }

  doRateUp() {
    this.rateUp.next(this.book);
  }
}
