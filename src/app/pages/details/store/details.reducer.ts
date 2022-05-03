import { createReducer, on } from '@ngrx/store';
import * as AppState from 'src/app/models/AppState';
import { PokemonDetails } from 'src/app/models/PokemonDetails';
import { PokemonSpecies } from 'src/app/models/PokemonSpecies';
import * as DetailsActions from './details.actions';

export interface DetailsState {
  readonly pokemon: PokemonDetails;
  readonly species: PokemonSpecies;
  readonly color: string;
}

export interface State extends AppState.State {
  details: DetailsState;
}

const initialState: DetailsState = {
  pokemon: {} as PokemonDetails,
  species: {} as PokemonSpecies,
  color: '',
};

export const detailsReducer = createReducer<DetailsState>(
  initialState,
  on(
    DetailsActions.updatePokemon,
    (state, { pokemon }): DetailsState => ({ ...state, pokemon })
  ),
  on(
    DetailsActions.updateSpecies,
    (state, { species }): DetailsState => ({ ...state, species })
  ),
  on(
    DetailsActions.updateColor,
    (state, { color }): DetailsState => ({ ...state, color })
  )
);
