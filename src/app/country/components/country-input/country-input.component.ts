import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  searchInput: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(value => {
      this.onDebounce.emit(value)
    })
  }

  search() {
    this.onEnter.emit(this.searchInput);

  }

  keyPress() {
    this.debouncer.next(this.searchInput);
  }
}
