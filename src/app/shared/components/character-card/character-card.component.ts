import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Result } from '@core/models/rickAnfMorty';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {
  @Input() charactersRickAndMorty!: Result[];
  @Input() colorText!: string;

}
