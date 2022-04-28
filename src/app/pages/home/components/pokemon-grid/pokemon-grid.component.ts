import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/AppState';
import { PokemonListItem } from 'src/app/models/PokemonListItem';
import { PokemonService } from 'src/app/services/pokemon.service';
import { updatePage } from '../../store/home.actions';
import { itemsPerPageSelector, pageSelector } from '../../store/home.selectors';

@Component({
  selector: 'pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss'],
})
export class PokemonGridComponent implements OnInit {
  pokemonList: PokemonListItem[] = [];
  page$!: number;
  itemsPerPage$!: number;

  constructor(
    private pokemonService: PokemonService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.select(pageSelector).subscribe((page) => (this.page$ = page));
    this.store
      .select(itemsPerPageSelector)
      .subscribe((itemsPerPage) => (this.itemsPerPage$ = itemsPerPage));

    this.pokemonService
      .getPokemonList(this.itemsPerPage$)
      .subscribe((list) => (this.pokemonList = list.results));
  }

  next(): void {
    this.store.dispatch(updatePage({ value: this.page$ + 1 }));
    this.pokemonService
      .getPokemonList(this.itemsPerPage$, this.itemsPerPage$ * (this.page$ + 1))
      .subscribe((list) => (this.pokemonList = list.results));
  }

  prev(): void {
    this.store.dispatch(updatePage({ value: this.page$ - 1 }));
  }
}
