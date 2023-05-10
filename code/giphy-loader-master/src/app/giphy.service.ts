import { Injectable } from '@angular/core';
import { GifItem, SimpleGif } from './gif-list/model/GifItem';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from './environments/envronment';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  constructor(private httpClient: HttpClient) {}

  getGiphs(searchTerm: string): Observable<SimpleGif[]> {
    const params = new HttpParams()
      .set('q', searchTerm)
      .set('limit', '25')
      .set('offset', '0')
      .set('rating', 'r')
      .set('lang', 'en');

    return this.httpClient
      .get<GifItem>(environment.search_api_url + environment.api_key, {
        params,
      })

      .pipe(
        map((response) =>
          response.data.map((datum) => ({
            id: datum.id,
            url: datum.url,
            image: datum.images.fixed_width.url,
            title: datum.title,
          }))
        )
      );
  }
}
