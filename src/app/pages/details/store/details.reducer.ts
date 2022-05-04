import { createReducer, on } from '@ngrx/store';
import * as AppState from 'src/app/models/AppState';
import { PokemonDetails } from 'src/app/models/PokemonDetails';
import { PokemonEvolutionChain } from 'src/app/models/PokemonEvolutionChain';
import { PokemonSpecies } from 'src/app/models/PokemonSpecies';
import * as DetailsActions from './details.actions';

export interface DetailsState {
  readonly pokemon: PokemonDetails;
  readonly species: PokemonSpecies;
  readonly evolutionChain: PokemonEvolutionChain;
  readonly color: string;
  readonly error: string;
}

export interface State extends AppState.State {
  details: DetailsState;
}

const initialState: DetailsState = {
  pokemon: {} as PokemonDetails,
  species: {} as PokemonSpecies,
  evolutionChain: {} as PokemonEvolutionChain,
  color: '',
  error: '',
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
    DetailsActions.loadEvolutionChainSuccess,
    (state, { evolutionChain }): DetailsState => ({ ...state, evolutionChain })
  ),
  on(
    DetailsActions.loadEvolutionChainFailure,
    (state, { error }): DetailsState => ({ ...state, error })
  ),
  on(
    DetailsActions.updateColor,
    (state, { color }): DetailsState => ({ ...state, color })
  )
);
