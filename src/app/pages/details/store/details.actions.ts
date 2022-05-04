import { createAction, props } from '@ngrx/store';
import { PokemonDetails } from 'src/app/models/PokemonDetails';
import { PokemonEvolutionChain } from 'src/app/models/PokemonEvolutionChain';
import { PokemonSpecies } from 'src/app/models/PokemonSpecies';

export const updatePokemon = createAction(
  '[Details] Update Pokemon',
  props<{ pokemon: PokemonDetails }>()
);

export const updateSpecies = createAction(
  '[Details] Update Pokemon Species',
  props<{ species: PokemonSpecies }>()
);

export const updateColor = createAction(
  '[Details] Update Color',
  props<{ color: string }>()
);

// Evolution chain
export const loadEvolutionChain = createAction(
  '[Details] Load Evolution Chain',
  props<{ url: string }>()
);

export const loadEvolutionChainSuccess = createAction(
  '[Details] Load Evolution Chain Success',
  props<{ evolutionChain: PokemonEvolutionChain }>()
);

export const loadEvolutionChainFailure = createAction(
  '[Details] Load Evolution Chain Fail',
  props<{ error: string }>()
);
