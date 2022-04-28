import { createAction, props } from '@ngrx/store';

export const updatePage = createAction(
  '[Home] Update Page',
  props<{ value: number }>()
);
export const updateItemsPerPage = createAction(
  '[Home] Update ItemsPerPage',
  props<{ value: number }>()
);
