import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, from } from 'rxjs';
import { map, switchMap, retry } from 'rxjs/operators';
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

    const observer = {
      next: e => console.log(e),
      error: err => console.error(err),
      complete: () => console.log('Complete!')
    };

    const subscription = of('😎', '🤩', '🅰️').subscribe(observer);

    subscription.unsubscribe();



    /*
    this.book$ = this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('isbn')),
        switchMap(isbn => this.bs.getSingle(isbn)),
        retry(5)
      );
    */
  }

}
