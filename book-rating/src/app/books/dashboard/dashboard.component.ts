import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private bs: BookRatingService) { }

  ngOnInit() {
    this.books = [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Tolles Buch',
        rating: 5
      },
      {
        isbn: '111',
        title: 'AngularJS',
        description: 'Altes Buch',
        rating: 3
      },
      {
        isbn: '222',
        title: 'React',
        description: 'Altes Buch',
        rating: 1
      }
    ];
  }

  doRateDown(book: Book) {
    const ratedBook = this.bs.rateDown(book);
    this.updateAndSortList(ratedBook);
  }

  doRateUp(book: Book) {
    const ratedBook = this.bs.rateUp(book);
    // const ratedBook = { ...book, rating: book.rating + 1 };
    this.updateAndSortList(ratedBook);
  }

  updateAndSortList(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }

  doCreateBook(book: Book) {
    this.books = [...this.books, book];
  }
}
