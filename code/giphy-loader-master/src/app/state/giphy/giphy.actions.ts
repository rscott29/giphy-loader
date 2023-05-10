import { createAction, props } from "@ngrx/store";
import { SimpleGif } from "../../gif-list/model/GifItem";




export const loadGifs = createAction('[Gif List Page] Load Gifs');

export const loadGifsSuccess = createAction(
  '[Giphy API] Gif Load Success',
  props<{ gifs: SimpleGif[] }>()
);

export const loadGifsFailure = createAction(
  '[Giphy API] Giph Load Failure',
  props<{ error: string }>()
);
