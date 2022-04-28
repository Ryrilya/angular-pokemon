import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/models/AppState';

const homeFeature = (state: AppState) => state.home;
export const pageSelector = createSelector(homeFeature, (state) => state.page);
export const itemsPerPageSelector = createSelector(
  homeFeature,
  (state) => state.itemsPerPage
);
