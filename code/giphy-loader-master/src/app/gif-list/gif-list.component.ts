import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SimpleGif } from './model/GifItem';
import {AppState} from '../state/app.state'
import { selectAllGifs, selectGifLoadedStatus } from '../state/giphy/giphy.selectors';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GifListComponent implements OnInit {
  vm$!: Observable<SimpleGif[]>;
  status$!: Observable<any>

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.vm$ = this.store.pipe(select(selectAllGifs))
    this.status$ = this.store.pipe(select(selectGifLoadedStatus))
  }

}
