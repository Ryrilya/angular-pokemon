import { createAction, props } from '@ngrx/store';
import { PokemonDetails } from 'src/app/models/PokemonDetails';
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
