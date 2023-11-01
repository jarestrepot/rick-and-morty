import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Result } from '@core/models/multipleCharacter';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-multiple-characters',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './multiple-characters.component.html',
  styleUrls: ['./multiple-characters.component.scss']
})
export class MultipleCharactersComponent {

  @Input() multipleCharacters?: Result[];
  constructor(private router:Router){
    
  }
  routeGo(id:number){
    this.router.navigate(['/major', { outlets: { child : ['details', id] }}]);
  }
}
