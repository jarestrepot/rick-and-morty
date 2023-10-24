import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '@env/enviroments';
import { ApiRickAndMorty, Result } from '@core/models/rickAnfMorty';
import { Observable, map, share } from 'rxjs';
import { characterDetail } from '@core/models/detailCharacter';


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


}
const URL = enviroment.API;

export const nextAllCharacters$ = (nextRequest: string = `${URL}`): Observable< ApiRickAndMorty > => {
  return inject(HttpClient).get< ApiRickAndMorty >(nextRequest)
    .pipe(
      share()
    )
}

