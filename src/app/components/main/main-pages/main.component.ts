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
        text: "elit. Corrupti, est numquam nobis harum suscipit alias sapiente necessitatibus deserunt consectetur quasi quisquam dignissimos quidem reprehenderit, distinctio doloremque quibusdam qui iste beatae.",
        img: {
          computer: '../../../../assets/img_ricky/imagecompressor/page-home.jpg',
          movil: '../../../../assets/img_ricky/imagecompressor/movil-fondo-section.jpg'
        }
      };
  }

}
