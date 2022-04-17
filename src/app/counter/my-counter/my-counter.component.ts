import { getCounter } from './../state/counter.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {

  // count$: Observable<number>;
  counter!: number;
  constructor(private store: Store<{ counter: number }>) { }
  ngOnInit(): void {
    this.store.select(getCounter).subscribe(counter => {
      this.counter = counter
    })
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
