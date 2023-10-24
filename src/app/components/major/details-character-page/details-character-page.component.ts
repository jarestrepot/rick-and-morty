import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiRickAndMorty } from '@core/models/rickAnfMorty';
import { CharactersService } from '../services/characters-controller.service';
import { characterDetail } from '@core/models/detailCharacter';

@Component({
  selector: 'app-details-character-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-character-page.component.html',
  styleUrls: ['./details-character-page.component.scss']
})
export class DetailsCharacterPageComponent implements OnInit {
  // Parameters with Input
  caharacter?: characterDetail;
  @Input() id?: string;
  detailService = inject(CharactersService);

  constructor() {
  }
  ngOnInit(): void {
    if (this.id) {
      // Consumo de la api.
      this.detailService.characterDetails$(this.id).subscribe(
        {
          next: (response: characterDetail) => {
            this.caharacter = response;
          },
          error: (error: Error) => {
            console.log(error);
          }
        }
      );
    }
    // Redirect
  }


}
