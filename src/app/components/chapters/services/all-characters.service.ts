import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiRickAndMorty } from '@core/models/rickAnfMorty';
import { enviroment } from '@env/enviroments';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllCharactersService {
  private readonly URL: string = enviroment.API;
  private httpClient = inject(HttpClient);
  searchAllCharacter$ = (name:string) => {
    return this.httpClient.get < ApiRickAndMorty >(`${this.URL}/?name=${name}`);
  }
}
