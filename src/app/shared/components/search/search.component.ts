import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchService = inject(ServicesService)
  @Input() search!:Boolean;
  src:string = '';

  callSearch(term: string) {
    term.length >= 1 ? this.searchService.keypress.emit(term) : this.searchService.keypress.emit('false')
  }
}
