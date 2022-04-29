import { createReducer, on } from '@ngrx/store';
import * as HomeActions from './home.actions';
import * as AppState from 'src/app/models/AppState';
import { PokemonListItem } from 'src/app/models/PokemonListItem';

// This slice of store is lazy loaded
export interface State extends AppState.State {
  home: HomeState;
}
export interface HomeState {
  readonly page: number;
  readonly itemsPerPage: number;
  readonly pokemonList: PokemonListItem[];
  readonly error: string;
}

const initialState: HomeState = {
  page: 0,
  itemsPerPage: 20,
  pokemonList: [],
  error: '',
};

export const homeReducer = createReducer<HomeState>(
  initialState,
  on(HomeActions.updatePage, (state, { value }): HomeState => {
    return { ...state, page: value > 0 ? value : 0 };
  }),
  on(HomeActions.updateItemsPerPage, (state, { value }) => ({
    ...state,
    itemsPerPage: value,
  })),
  on(
    HomeActions.loadPokemonListSuccess,
    (state, { list }): HomeState => ({
      ...state,
      pokemonList: list,
      error: '',
    })
  ),
  on(
    HomeActions.loadPokemonListFailure,
    (state, { error }): HomeState => ({ ...state, pokemonList: [], error })
  )
);
