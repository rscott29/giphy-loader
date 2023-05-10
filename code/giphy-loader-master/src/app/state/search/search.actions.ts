import { createAction, props } from "@ngrx/store";

export const searchTermEntered = createAction(
    '[Search Bar] Search Term Entered',
    props<{ searchTerm: string }>()
  );
  