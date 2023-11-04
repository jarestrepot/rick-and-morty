import { Component, Input, OnInit, inject, SimpleChanges, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from '../../main/services/characters-controller.service';
import { characterDetail } from '@core/models/detailCharacter';
import { Result } from '@core/models/rickAnfMorty';
import { multipleCharacters } from '@core/models/multipleCharacter';
import { CharacterCardComponent } from '@shared/components/character-card/character-card.component';
import {  Router } from '@angular/router';
import { ServicesService } from '@shared/components/search/services/services.service';
import { SearchCardComponent } from '@shared/components/search-card/search-card.component';

@Component({
  selector: 'app-details-character-page',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent, SearchCardComponent],
  templateUrl: './details-character-page.component.html',
  styleUrls: ['./details-character-page.component.scss']
})
export class DetailsCharacterPageComponent implements OnInit, OnChanges {
  caharacter?: characterDetail;
  // Parameters as Input
  @Input() id?: string;
  detailService = inject(CharactersService);
  routerLink = inject(Router);
  searchServiceKeypress = inject(ServicesService)
  locationRelatedCharacter: Result[] = [];
  findCharacters: Result[] = [];

  ngOnInit(): void {
    this.id ? this.characterDetails(this.id) : this.redirecMain();
    this.searchServiceKeypress.keypress.subscribe({
      next: (key: string) =>{
        this.findCharacters = this.locationRelatedCharacter?.filter((character: Result) => {
          return character.name.toLowerCase().includes(key.toLowerCase())
        });
      },
      error: (err: Error) =>{
        this.redirecMain()
      }
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes){
      const { currentValue } = changes['id'];
      this.characterDetails(currentValue)
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 10, behavior: 'smooth' });
  }

  characterDetails(idCharacter: string){
    if (idCharacter){
      this.detailService.characterDetails$(idCharacter).subscribe(
          {
            next: (response: characterDetail) => {
              this.scrollToTop();
              this.caharacter = response;
              response.location.url
                ? this.locationDetails(response.location.url)
                :  this.episodeDetails(response.episode);
            },
            error: (error: Error) => {
              this.redirecMain()
              console.log(error);
            }
          }
        );
      }
  }

  redirecMain(){
    this.routerLink.navigate(['/', 'major'])
  }

  episodeDetails(episodes: string[]){
    episodes.map(episode => {
      this.detailService.episodeCharacter$(episode).subscribe({
        next: (response) => {
          this.locationRelatedCharacter = response.flat();
        },
        error:(error) => {
          console.log(error);
        }
      })
    })
  }

  locationDetails(url:string){
    this.detailService.locationCharacters$(url, String(this.caharacter?.id)).subscribe(
      {
        next: (response: multipleCharacters[]) => {
          this.locationRelatedCharacter = response.flat();
        },
        error: (error:Error) => {
          console.error(error);
        }
      }
    )
  }


}