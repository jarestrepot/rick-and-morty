import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesService } from '@shared/components/search/services/services.service';
import { AllCharactersService } from '@components/chapters/services/all-characters.service';
import { ApiRickAndMorty, Result } from '@core/models/rickAnfMorty';
import { CharacterCardComponent } from '@shared/components/character-card/character-card.component';

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
  characteresFind:Result[] = [];
  messageError: Boolean = false;
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


  searchCharacterFunction(key:string){
    this.searCharacter.searchAllCharacter$(key).subscribe(
      {
        next: (response: ApiRickAndMorty) => {
          const { results } = response;
          this.characteresFind = results;
        },
        error: (e: Error) => {
          this.characteresFind = [];
          this.messageError = true;
        }
      }
    )
  }
}
