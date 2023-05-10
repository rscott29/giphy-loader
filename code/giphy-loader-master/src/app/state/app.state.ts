import { GiphyState } from "./giphy/giphy.reducer";
import { SearchState } from "./search/search.reducer";

export interface AppState {
    gifs: GiphyState,
    search: SearchState
}