import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponentComponent } from '@shared/components/card-component/card-component.component';
import { atributes } from '@core/models/elementsHero';
import { HeroComponent } from '@shared/components/hero/hero.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CardComponentComponent, HeroComponent ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MajorComponent implements OnInit {

  elemetsCard!: atributes;
  ngOnInit(): void {
    this.elemetsCard =
      {
        text: "On this page you can find your favorite character from the first 4 seasons of Rick and Morty. In this first presentation you can find characters 20 by 20 if you scroll you can go searching or the search engine will find for you among the characters that are in the batch, if you need a search engine for all the characters you can go to the chapters section.",
        img: {
          computer: '../../../../assets/img_ricky/imagecompressor/page-home.jpg',
          movil: '../../../../assets/img_ricky/imagecompressor/logo-dark.png'
        }
      };
  }

}
