import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiRickAndMorty, Result } from '@core/models/rickAnfMorty';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharactersService, nextAllCharacters$ } from '@components/major/services/characters-controller.service';
import { ServicesService } from '../search/services/services.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [CommonModule, InfiniteScrollModule, RouterLink],
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {

  serachCharacter = inject(ServicesService)
  charactersRickAndMorty!: Result[];
  charactersRickAndMortyInject = inject(CharactersService);
  nextUrl!: string;
  findCharacters!: Result[] | undefined;
  search: string | undefined = '';
  // @Input() multipleCharacters

  ngOnInit(): void {
    this.serachCharacter.keypress.subscribe(
      (key:string) =>{
        this.findCharacters = this.filterCharacters(key);
        this.asignedSearch(key)
      }
    );
  }


  asignedSearch(key:string){
    if(key === 'false'){
      this.search = undefined;
      return;
    }
    if(key.length >= 1 ){
      this.search = key;
      return;
    }
  }

  filterCharacters(key:string): Result[] | undefined {
    const results: Result[] | undefined = this.charactersRickAndMorty.filter((element: Result | undefined) => {
      return element?.name.toLowerCase().includes(key.toLowerCase());
    });
    if(results.length === 0){
      return undefined;
    };
    return results;
  }

  constructor() {
    nextAllCharacters$().subscribe(
      {
        next: (response: ApiRickAndMorty) => {
          let { results, info } = response;
          this.nextUrl = info.next;
          this.charactersRickAndMorty = results;
        },
        error: (error: any) => {
          console.log(error)
        }
      }
    );

  }

  onScroll() {
    this.charactersRickAndMortyInject.nextAllCharacters$(this.nextUrl)
      .subscribe({
        next: (response: ApiRickAndMorty) => {
          const { results, info } = response;
          if (this.nextUrl !== info.next) {
            this.nextUrl = info.next;
            results.map((element) => {
              this.charactersRickAndMorty = [...this.charactersRickAndMorty, element]
            });
          }
        },
        error: (error: Error) => {
          console.error(error);
        }
      });
  }
}
