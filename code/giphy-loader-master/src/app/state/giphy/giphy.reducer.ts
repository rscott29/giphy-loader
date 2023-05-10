import {createReducer, on} from "@ngrx/store";
import {SimpleGif} from "../../gif-list/model/GifItem";
import {loadGifsFailure, loadGifsSuccess} from "./giphy.actions";
import {searchTermEntered} from "../search/search.actions";

export interface GiphyState {
  gifs: SimpleGif[],
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success'

}

export const initialState: GiphyState = {
  gifs: [],
  error: null,
  status: 'pending'
}

export const giphyReducer = createReducer(
  initialState,
  on(searchTermEntered, (state) => ({...state, status: 'loading'})),
  on(loadGifsSuccess, (state, {gifs}) => ({
    ...state,
    gifs: gifs,
    error: null,
    status: 'success'
  })),
  on(loadGifsFailure, (state, {error}) => ({
    ...state,
    status: 'error'

  }))
);
