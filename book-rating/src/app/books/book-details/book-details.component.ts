import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, from } from 'rxjs';
import { map, switchMap, retry, filter, reduce, tap, mergeMap, catchError, share } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;
  showDescription = false;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {

    this.book$ = this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('isbn')),
        switchMap(isbn => this.bs.getSingle(isbn)
          .pipe(catchError((err: HttpErrorResponse) => of({
            title: 'Error loading ' + err.url,
            isbn: '000',
            description: '',
            rating: 1
          }))))
      );
  }

}
