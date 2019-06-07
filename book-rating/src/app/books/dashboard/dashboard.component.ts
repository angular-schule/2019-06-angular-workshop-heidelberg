import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { LoadBooks } from '../actions/book.actions';
import { getBooksLoading, getAllBooks } from '../selectors/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  loading$ = this.store.pipe(select(getBooksLoading));
  books$ = this.store.pipe(select(getAllBooks));

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadBooks());
  }

  doRateDown(book: Book) {
    // TODO: redux
  }

  doRateUp(book: Book) {
    // TODO: redux
  }

  updateAndSortList(ratedBook: Book) {
    // TODO: redux
  }

  doCreateBook(book: Book) {
      // TODO: redux
  }
}
