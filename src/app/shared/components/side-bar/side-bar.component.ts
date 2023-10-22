import { Component, OnInit, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ThemeModeComponent } from '../theme-mode/theme-mode.component';
import { mainMeu } from '@core/models/navBarInterface';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, ThemeModeComponent, SearchComponent],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {


  search = signal<string>('');

  state!:Boolean;

  mainMenu: mainMeu = { defaultOptions: [] };

  constructor(private router: Router){
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.state));
    });
  }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Main',
        router: ['/', 'major']
      },
      {
        name: 'Chapters',
        router: ['/', 'chapters']
      },
    ];
    if (window.localStorage.getItem('darkMode') === 'true'){
      this.state = true
    }
  }

  routerGo({ router, query }:any): void {
    this.router.navigate(router, query && {
      queryParams:
        query
    });
  };
  /**
   * Value emitted from thema component
   * @param event Value emitted
   */
  renderImage(event:Boolean){
    this.state = event;
  }
}


