import { Component, ElementRef, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesService } from '@shared/components/search/services/services.service';
import { AllCharactersService } from '@components/chapters/services/all-characters.service';
import { ApiRickAndMorty, Result } from '@core/models/rickAnfMorty';
import { CharacterCardComponent } from '@shared/components/character-card/character-card.component';
import { InfoSeason, ResultSeason, seasonInterface } from '@core/models/seasson';
import { CharactersService } from '@components/main/services/characters-controller.service';

@Component({
  selector: 'app-chapters-all',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent],
  templateUrl: './chapters-all.component.html',
  styleUrls: ['./chapters-all.component.scss']
})
export class ChaptersAllComponent implements OnInit {

  searCharacter = inject(AllCharactersService);
  searchFull = inject(ServicesService);
  findCharactersService = inject(CharactersService);
  renderer2 = inject(Renderer2);
  characteresFind:Result[] = [];
  messageError: Boolean = false;
  season: ResultSeason[] = [];
  info!: InfoSeason;
  theadValues: string[] = [];
  @ViewChild('svgRequest') svgRequest!: ElementRef;


  ngOnInit(): void {
    this.searchFull.keypress.subscribe({
      next: (e: string) => {
        if(e.length  >= 1){
          this.searchCharacterFunction(e)
        }
      },
      error: (err:Error) => {
        console.log(err);
      }
    })
  }

  seasonSearch(number:string){
    this.season = [];
    this.searCharacter.searchAllCharacterEpisode$(number).subscribe(
      {
        next: (response: seasonInterface) => {
          this.season = response.results;
          this.info = response.info;
        },
        error: (error: Error) => {
          console.error(error);
        }
      }
    )
  }

  getCharacterSeason(event:MouseEvent){
    this.removeClassElements(this.svgRequest.nativeElement, ['hidden']);
    this.addClassElements(this.svgRequest.nativeElement, ['inline']);

    const idCharacters: string[] = this.season.map((season: ResultSeason) =>{
      return season.characters.map((character:string) => {
        const urlPart: string[] = character.split('/');
        return urlPart[urlPart.length -1 ];
      });
    }).flat();

    this.findCharactersService.findCharacters$(idCharacters).subscribe({
      next: (response ) => {
        this.characteresFind = response.flat();
        this.removeClassElements(this.svgRequest.nativeElement, ['inline'])
        this.addClassElements(this.svgRequest.nativeElement, ['hidden'])
      },
      error: (err: Error) => {
        console.log(`Error: `, err)
      }
    })
  }

  addClassElements(element: ElementRef, className: string[]){
    for(let attribute of className){
      this.renderer2.addClass(element, attribute)
    }
  }

  removeClassElements(element: ElementRef, className: string[]) {
    for (let attr of className) {
      this.renderer2.removeClass(element, attr)
    }
  }

  searchCharacterFunction(key:string){
    this.searCharacter.searchAllCharacter$(key).subscribe(
      {
        next: (response: ApiRickAndMorty) => {
          const { results } = response;
          this.characteresFind = results;
          this.messageError = false;
        },
        error: (e: Error) => {
          this.characteresFind = [];
          this.messageError = true;
        }
      }
    )
  }
}
