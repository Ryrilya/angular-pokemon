import { PokemonListItem } from 'src/app/models/PokemonListItem';
import { createAction, props } from '@ngrx/store';
import { PokemonDetails } from 'src/app/models/PokemonDetails';

// Pagination
export const updatePage = createAction(
  '[Home] Update Page',
  props<{ value: number }>()
);

export const updateItemsPerPage = createAction(
  '[Home] Update ItemsPerPage',
  props<{ value: number }>()
);

// Pokemon list
export const loadPokemonList = createAction(
  '[Home] Load Pokemon List',
  props<{ limit?: number; offset?: number }>()
);

export const loadPokemonListSuccess = createAction(
  '[Home] Load Pokemon List Success',
  props<{ list: PokemonListItem[] }>()
);

export const loadPokemonListFailure = createAction(
  '[Home] Load Pokemon List Fail',
  props<{ error: string }>()
);

// Pokemon details
export const loadPokemonDetails = createAction(
  '[Home] Load Pokemon Details',
  props<{ by: 'name' | 'id' | 'url'; value: string }>()
);

export const loadPokemonDetailsSuccess = createAction(
  '[Home] Load Pokemon Details - Success',
  props<{ pokemon: PokemonDetails }>()
);

export const loadPokemonDetailsFailure = createAction(
  '[Home] Load Pokemon Details - Failure',
  props<{ error: string }>()
);
