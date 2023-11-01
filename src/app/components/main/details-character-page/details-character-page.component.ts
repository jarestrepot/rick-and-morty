import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from '../services/characters-controller.service';
import { characterDetail } from '@core/models/detailCharacter';
import { Result } from '@core/models/rickAnfMorty';
import { multipleCharacters } from '@core/models/multipleCharacter';
import { MultipleCharactersComponent } from '@shared/components/multiple-characters/multiple-characters.component';
import { CharacterCardComponent } from '@shared/components/character-card/character-card.component';

@Component({
  selector: 'app-details-character-page',
  standalone: true,
  imports: [CommonModule, MultipleCharactersComponent, CharacterCardComponent ],
  templateUrl: './details-character-page.component.html',
  styleUrls: ['./details-character-page.component.scss']
})
export class DetailsCharacterPageComponent implements OnInit {
  // Parameters with Input
  caharacter?: characterDetail;
  @Input() id?: string;
  detailService = inject(CharactersService);

  locationRelatedCharacter?: Result[] ;

  constructor() {
  }
  ngOnInit(): void {
    this.characterDetails();
  }

  characterDetails(){
    setTimeout(()=> {
      if(this.id){
        this.detailService.characterDetails$(this.id).subscribe(
          {
            next: (response: characterDetail) => {
              this.caharacter = response;
              this.locationDetails(response.location.url)
            },
            error: (error: Error) => {
              console.log(error);
            }
          }
        );
      }
    }, 5000)
    // Redirect
  }

  locationDetails(url:string){
    this.detailService.locationCharacters$(url).subscribe(
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
