import { HttpErrorResponse } from '@angular/common/http';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { isJSON } from 'src/app/helpers/is-json';
import { HomeState } from './home.reducer';

// Gets the selected slice of store state
const homeFeature = createFeatureSelector<HomeState>('home');

export const pageSelector = createSelector(homeFeature, (state) => state.page);
export const itemsPerPageSelector = createSelector(
  homeFeature,
  (state) => state.itemsPerPage
);
export const errorSelector = createSelector(
  homeFeature,
  (state) => state.error
);

// Pokemon
export const pokemonListSelector = createSelector(
  homeFeature,
  (state) => state.pokemonList
);
