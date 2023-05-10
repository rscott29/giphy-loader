import { createSelector } from "@ngrx/store"
import { AppState } from "../app.state"
import { SearchState } from "./search.reducer"

export const selectSearchTerm = (state: AppState) => state.search

export const selectSearch = createSelector(
    selectSearchTerm,
    (state: SearchState) => state.searchTerm
)