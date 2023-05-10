import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifListComponent } from './gif-list/gif-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { giphyReducer } from './state/giphy/giphy.reducer';
import { environment } from './environments/envronment';
import { GiphyService } from './giphy.service';
import { GiphyEffects } from './state/giphy/giphy.effect';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { searchReducer } from './state/search/search.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { LoadingComponent } from './shared/loading/loading.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [AppComponent, GifListComponent, SearchBarComponent, LoadingComponent],
    imports: [
        HttpClientModule,
        StoreModule.forRoot({gifs: giphyReducer, search: searchReducer}),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        EffectsModule.forRoot([GiphyEffects]),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        TypeaheadModule.forRoot(),
        NgOptimizedImage,
    ],
  providers: [GiphyService, GiphyEffects],
  bootstrap: [AppComponent],
})
export class AppModule {}
