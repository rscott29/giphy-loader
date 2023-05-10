import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { searchTermEntered } from 'src/app/state/search/search.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements OnInit, OnDestroy {
selected: any;
  constructor(private store: Store<AppState>) {}

  searchField$ = new Subject<string>();
  destroy$ = new Subject<void>();
  searchField!: string;
  searches = ['cats', 'dogs']

  ngOnInit(): void {
    this.searchField$
      .pipe(debounceTime(500), takeUntil(this.destroy$))
      .subscribe((value) =>
        this.store.dispatch(searchTermEntered({ searchTerm: value }))
      );
  }

  inputChange() {
    this.searchField$.next(this.searchField);
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
