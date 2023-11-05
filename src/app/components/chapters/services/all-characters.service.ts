import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiRickAndMorty } from '@core/models/rickAnfMorty';
import { seasonInterface } from '@core/models/seasson';
import { enviroment } from '@env/enviroments';
import { Observable, catchError, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllCharactersService {
  private readonly URL: string = enviroment.API;
  private readonly URL_SEASON: string = enviroment.SEASON;
  private httpClient = inject(HttpClient);
  searchAllCharacter$ = (name:string) => {
    return this.httpClient.get < ApiRickAndMorty >(`${this.URL}/?name=${name}`);
  }

  searchAllCharacterEpisode$ = (season: string): Observable<seasonInterface> => {
    return this.httpClient.get<seasonInterface>(`${this.URL_SEASON}?page=${season}`);
  }
}
