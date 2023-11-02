import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Result } from '@core/models/rickAnfMorty';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent {
  @Input() findCharacters: Result[] = [];
}
