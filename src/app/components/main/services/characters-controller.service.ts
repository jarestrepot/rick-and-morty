import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '@env/enviroments';
import { ApiRickAndMorty } from '@core/models/rickAnfMorty';
import { Observable, forkJoin, map, of, share, switchMap } from 'rxjs';
import { characterDetail } from '@core/models/detailCharacter';
import { urlLocation } from '@core/models/urlLocation';
import { multipleCharacters } from '@core/models/multipleCharacter';
import { episodeCharacter } from '@core/models/episodeCharacter';


@Injectable({
  providedIn: 'root'
})
export class CharactersService{

  private readonly URL:string = enviroment.API;
  private readonly URL_LAST_PAGE: string = enviroment.LAST_PAGE;
  private httpClient = inject(HttpClient);

  nextAllCharacters$ = (nextRequest: string = `${this.URL}`): Observable< ApiRickAndMorty > => {
    return this.httpClient.get<ApiRickAndMorty>(`${nextRequest}`).pipe(
      share(),
      map((response: ApiRickAndMorty)  =>{
        if(!response.info.next){
          response.info.next = this.URL;
        }
        return response
      }),

    )
  }
  characterDetails$ = (characterId: string): Observable<characterDetail> => {
    return this.httpClient.get<characterDetail>(`${this.URL}/${characterId}`);
  }

  locationCharacters$ = (url: string, id: string | undefined):Observable <multipleCharacters[]> => {
    return this.httpClient.get < urlLocation >(url)
      .pipe(
        switchMap(location => {
          const { residents } = location;
          const arrayIdCharacters = residents.map((character:string) => {
            const urlPart: string[] = character.split('/');
            return urlPart[urlPart.length - 1]
          }).filter(character => character !== id);
          if (arrayIdCharacters.length === 0){
            return of([])
          }
          return forkJoin(this.findCharacters$(arrayIdCharacters));
        })
      );
  }

  episodeCharacter$ = (episodesUrl: string): Observable<multipleCharacters[]> => {
    return this.httpClient.get<episodeCharacter>(episodesUrl)
      .pipe(
        switchMap(episode => {
          const { characters } = episode;
          const arrayIdCharacters = characters.map((character:string) => {
            const urlPart: string[] = character.split('/');
            return urlPart[urlPart.length - 1]
          });

          return forkJoin(this.findCharacters$(arrayIdCharacters));
        })
      )
  }

  findCharacters$(ids: string[]): Observable<multipleCharacters>{
    return this.httpClient.get<multipleCharacters>(`${this.URL}/${ids}`);
  }
}

