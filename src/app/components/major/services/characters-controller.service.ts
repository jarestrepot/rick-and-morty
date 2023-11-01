import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '@env/enviroments';
import { ApiRickAndMorty, Result } from '@core/models/rickAnfMorty';
import { Observable, filter, forkJoin, map, share, switchMap } from 'rxjs';
import { characterDetail } from '@core/models/detailCharacter';
import { urlLocation } from '@core/models/urlLocation';
import { multipleCharacters } from '@core/models/multipleCharacter';


@Injectable({
  providedIn: 'root'
})
export class CharactersService{

  private readonly URL:string = enviroment.API;
  private httpClient = inject(HttpClient);

  nextAllCharacters$ = (nextRequest: string = `${this.URL}`): Observable<ApiRickAndMorty > => {
    return this.httpClient.get<ApiRickAndMorty>(`${nextRequest}`).pipe(
      share(),
    )
  }
  characterDetails$ = (characterId: string): Observable<characterDetail> => {
    return this.httpClient.get<characterDetail>(`${URL}/${characterId}`);
  }

  locationCharacters$ = (url: string):Observable <multipleCharacters[]> => {
    return this.httpClient.get < urlLocation >(url)
      .pipe(
        switchMap(location => {
          const { residents } = location;
          const arrayIdCharacters = residents.map(character => {
            const urlPart = character.split('/')
            return urlPart[urlPart.length - 1]
          });
          const getLocationCharacter: Observable<multipleCharacters> = this.httpClient.get<multipleCharacters>(`${this.URL}/${arrayIdCharacters}`) ;
          return forkJoin(getLocationCharacter);
        })
      );
  }

}
const URL = enviroment.API;

export const nextAllCharacters$ = (nextRequest: string = `${URL}`): Observable< ApiRickAndMorty > => {
  return inject(HttpClient).get< ApiRickAndMorty >(nextRequest)
    .pipe(
      share()
    )
}

