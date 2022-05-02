import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { State } from 'src/app/pages/home/store/home.reducer';
import * as HomeSelectors from 'src/app/pages/home/store/home.selectors';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage!: number;
  @Input() itemsPerPage!: number;
  @Input() prevDisabled!: boolean | ((...args: any[]) => boolean);
  @Input() nextDisabled!: boolean | ((...args: any[]) => boolean);
  @Output() onNext: EventEmitter<undefined> = new EventEmitter();
  @Output() onPrev: EventEmitter<undefined> = new EventEmitter();
  iconLeft = faArrowLeft;
  iconRight = faArrowRight;
  pokemonSprites!: [string, string];

  constructor(private store: Store<State>) {
    this.store.select(HomeSelectors.pokemonListSelector).subscribe((list) => {
      // this.pokemonSprites[0] = list[0].
    });
  }

  ngOnInit(): void {}

  next(): void {
    console.log('[Pagination] next()');

    this.onNext.emit();
  }

  prev(): void {
    this.onPrev.emit();
  }
}
