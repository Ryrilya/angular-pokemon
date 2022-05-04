import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DetailsState } from './details.reducer';

const detailsFeature = createFeatureSelector<DetailsState>('details');

export const pokemonSelector = createSelector(
  detailsFeature,
  (state) => state.pokemon
);

export const speciesSelector = createSelector(
  detailsFeature,
  (state) => state.species
);

export const evolutionChainSelector = createSelector(
  detailsFeature,
  (state) => state.evolutionChain
);

export const colorSelector = createSelector(
  detailsFeature,
  (state) => state.color
);
