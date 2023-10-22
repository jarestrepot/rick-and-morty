import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { atributes } from '@core/models/elementsHero';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  @Input() atributesHero!: atributes;
}
