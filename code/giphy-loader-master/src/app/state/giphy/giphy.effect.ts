import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import {
  catchError, debounceTime,
  from,
  map,
  of,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { GiphyService } from 'src/app/giphy.service';
import { loadGifs, loadGifsFailure, loadGifsSuccess } from './giphy.actions';
import { selectSearch } from '../search/search.selector';
import { AppState } from '../app.state';
import { searchTermEntered } from '../search/search.actions';

@Injectable()
export class GiphyEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private giphyService: GiphyService
  ) {}
  loadGifs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadGifs, searchTermEntered),
      tap(() => console.log('loadGifs action detected')),
      debounceTime(2000),
      withLatestFrom(this.store.pipe(select(selectSearch))),
      switchMap(([_, searchString]) =>
        from(this.giphyService.getGiphs(searchString)).pipe(
          tap((gifs) => console.log('Gifs received:', gifs)),
          map((gifs) => loadGifsSuccess({ gifs: gifs })),
          catchError((error) => {
            console.error('Error:', error);
            return of(loadGifsFailure({ error: error }));
          })
        )
      )
    )
  );
}
