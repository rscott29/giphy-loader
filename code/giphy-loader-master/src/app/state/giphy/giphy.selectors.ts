import { createSelector } from "@ngrx/store";
import { GiphyState } from "./giphy.reducer";
import { AppState } from "../app.state";


export const selectGifs = (state: AppState) => state.gifs

export const selectAllGifs = createSelector(
    selectGifs,
    (state: GiphyState) => state.gifs
)

export const selectGifLoadedStatus = createSelector(
    selectGifs,
    (state: GiphyState) => state.status
)
