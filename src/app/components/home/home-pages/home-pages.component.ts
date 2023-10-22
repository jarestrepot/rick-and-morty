import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';

@Component({
  selector: 'app-home-pages',
  standalone: true,
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.scss'],
  imports: [RouterOutlet, CommonModule, FooterComponent, SideBarComponent]
})
export class HomePagesComponent {

}
