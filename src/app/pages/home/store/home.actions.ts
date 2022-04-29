import { PokemonListItem } from 'src/app/models/PokemonListItem';
import { createAction, props } from '@ngrx/store';

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
