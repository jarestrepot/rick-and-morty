import { Component, Input, OnInit, inject, SimpleChanges, OnChanges,  Renderer2, ViewChild, ElementRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from '../../main/services/characters-controller.service';
import { characterDetail } from '@core/models/detailCharacter';
import { Result } from '@core/models/rickAnfMorty';
import { multipleCharacters } from '@core/models/multipleCharacter';
import { CharacterCardComponent } from '@shared/components/character-card/character-card.component';
import {  Router } from '@angular/router';
import { ServicesService } from '@shared/components/search/services/services.service';
import { SearchCardComponent } from '@shared/components/search-card/search-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-character-page',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent, SearchCardComponent, FormsModule],
  templateUrl: './details-character-page.component.html',
  styleUrls: ['./details-character-page.component.scss']
})
export class DetailsCharacterPageComponent implements OnInit, OnChanges {
  caharacter?: characterDetail;
  // Parameters as Input
  @Input() id?: string;
  detailService = inject(CharactersService);
  routerLink = inject(Router);
  searchServiceKeypress = inject(ServicesService);
  renderer2 = inject(Renderer2);
  locationRelatedCharacter: Result[] = [];
  findCharacters: Result[]  = [];
  @ViewChild('character') character!: ElementRef;
  selectedStatus: string = '';
  selectedGender: string = '';
  selectedSpecies: string = '';

  filterCharacter: Result[] = [];

  status: string[] = [];
  gender: string[] = [];
  species: string[] = [];
  search = signal('')

  ngOnInit(): void {
    this.id ? this.characterDetails(this.id) : this.redirecMain();
    this.searchServiceKeypress.keypress.subscribe({
      next: (key: string) =>{
        if(key === 'false'){
          this.search.set('');
          return;
        }
        this.search.set(key)
        this.findCharacters = this.locationRelatedCharacter.filter((character: Result) => {
          return character.name.toLowerCase().includes(key.toLowerCase())
        });
      },
      error: (err: Error) =>{
        this.redirecMain()
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes){
      const { currentValue } = changes['id'];
      this.characterDetails(currentValue);
      this.generalFilter()
    }
  }

  generalFilter(){
    const valuesFilter: string[] = [this.selectedSpecies, this.selectedGender, this.selectedStatus];
    const filteredValues = valuesFilter.every( value => value === '');
    if (filteredValues) this.locationRelatedCharacter = this.filterCharacter;
    const valueTmp: Result[] = this.filterCharacter.filter((character: Result) => {
      return (
        // Verifica si al menos uno de los criterios seleccionados coincide
        (this.selectedStatus.length === 0 || character.status === this.selectedStatus) &&
        (this.selectedGender.length === 0 || character.gender === this.selectedGender) &&
        (this.selectedSpecies.length === 0 || character.species === this.selectedSpecies)
      );
    });
    console.log(valueTmp);
    this.locationRelatedCharacter = valueTmp;
    this.setAllValues(valueTmp);
  }


  scrollToTop() {
    window.scrollTo({ top: 10, behavior: 'smooth' });
  }

  characterDetails(idCharacter: string){
    if (idCharacter){
      this.detailService.characterDetails$(idCharacter).subscribe(
          {
            next: (response: characterDetail) => {
              this.scrollToTop();
              this.caharacter = response;
              response.location.url
                ? this.locationDetails(response.location.url)
                :  this.episodeDetails(response.episode);
            },
            error: (error: Error) => {
              this.redirecMain()
              console.log(error);
            }
          }
        );
      }
  }

  onMouseLeave(event: MouseEvent){
    this.removeClassElement(this.character.nativeElement, ['slide-in-x']);
    this.addClassElement(this.character.nativeElement, ['slide-out-x', 'translate-x-96']);
  }
  onMouseEnter({ target }: any){
    if(target){
      this.removeClassElement(target.children[1], ['translate-x-96', 'slide-out-x']);
      this.addClassElement(target.children[1], ['slide-in-x']);
    }
  }
  redirecMain(){
    this.routerLink.navigate(['/', 'major'])
  }

  addClassElement(element: ElementRef, className:string[]){
    for (let newClass in className){
      this.renderer2.addClass(element, className[newClass])
    }
  }

  removeClassElement(element: ElementRef, className: string[]){
    for (let deleteClass in className) {
      this.renderer2.removeClass(element, className[deleteClass])
    }
  }

  episodeDetails(episodes: string[]){
    episodes.map(episode => {
      this.detailService.episodeCharacter$(episode).subscribe({
        next: (response) => {
          this.locationRelatedCharacter = response.flat();
        },
        error:(error) => {
          this.redirecMain()
        }
      })
    })
  }

  locationDetails(url:string){
    this.detailService.locationCharacters$(url, String(this.caharacter?.id)).subscribe(
      {
        next: (response: multipleCharacters[]) => {
          this.locationRelatedCharacter = response.flat();
          this.filterCharacter = response.flat();
          this.setAllValues(response.flat());
        },
        error: (error:Error) => {
          this.redirecMain()
        }
      }
    )
  }


  setAllValues(results: Result[]){
    this.status = [...new Set(results.map(result => result.status))];
    this.gender = [...new Set(results.map(result => result.gender))];
    this.species = [...new Set(results.map(result => result.species))];
  }
}
