import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { PokemonListItem } from 'src/app/models/PokemonListItem';
import * as HomeActions from '../../store/home.actions';
import * as HomeSelectors from '../../store/home.selectors';
import { State } from '../../store/home.reducer';

@Component({
  selector: 'pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss'],
})
export class PokemonGridComponent implements OnInit {
  pokemonList$!: Observable<PokemonListItem[]>;
  error$!: Observable<string>;
  itemsPerPage!: number;
  page!: number;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    // this.page subscriber
    this.store
      .select(HomeSelectors.pageSelector)
      .subscribe((page) => (this.page = page));

    // this.itemsPerPage subscriber
    this.store
      .select(HomeSelectors.itemsPerPageSelector)
      .subscribe((itemsPerPage) => (this.itemsPerPage = itemsPerPage));

    this.error$ = this.store.select(HomeSelectors.errorSelector);

    this.pokemonList$ = this.store.select(HomeSelectors.pokemonListSelector);
    this.store.dispatch(HomeActions.loadPokemonList({}));
  }

  // Event Handlers
  onNextHandler(): void {
    this.store.dispatch(HomeActions.updatePage({ value: this.page + 1 }));
    this.store.dispatch(
      HomeActions.loadPokemonList({
        limit: this.itemsPerPage,
        offset: this.page * this.itemsPerPage,
      })
    );
  }

  onPrevHandler(): void {
    this.store.dispatch(HomeActions.updatePage({ value: this.page - 1 }));
    this.store.dispatch(
      HomeActions.loadPokemonList({
        limit: this.itemsPerPage,
        offset: this.page * this.itemsPerPage,
      })
    );
  }
}
