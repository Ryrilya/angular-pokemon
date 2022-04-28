import { createReducer, on } from '@ngrx/store';
import { updatePage, updateItemsPerPage } from './home.actions';

export interface HomeState {
  readonly page: number;
  readonly itemsPerPage: number;
}

const initialState: HomeState = {
  page: 0,
  itemsPerPage: 20,
};

export const homeReducer = createReducer<HomeState>(
  initialState,
  on(updatePage, (state, { value }): HomeState => {
    return { ...state, page: value > 0 ? value : 0 };
  }),
  on(updateItemsPerPage, (state, { value }) => ({
    ...state,
    itemsPerPage: value,
  }))
);
