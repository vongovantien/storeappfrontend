import { CounterState } from './../state/counter.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent implements OnInit {

  value!: number;
  text: string | undefined;
  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      this.text = data.text;
    })
  }

  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }
}
