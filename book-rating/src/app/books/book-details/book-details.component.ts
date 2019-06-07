import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, from } from 'rxjs';
import { map, switchMap, retry, filter, reduce, tap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {

    this.book$ = this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('isbn')),
        switchMap(isbn => this.bs.getSingle(isbn)),
        retry(5)
      );


    this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('isbn')),
        map(isbn => this.bs.getSingle(isbn)),
      ).subscribe((x) =>
        x.subscribe(buch => console.log(buch))
      );



  }

}
