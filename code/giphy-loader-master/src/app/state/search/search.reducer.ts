import { createReducer, on } from "@ngrx/store";
import { searchTermEntered } from "./search.actions";

export interface SearchState {

    searchTerm: string;
}

export const initialState: SearchState = {
    searchTerm: ''
}

export const searchReducer = createReducer(
    initialState,
    on(searchTermEntered, (state, {searchTerm}) => ({ ...state, searchTerm: searchTerm })),

)