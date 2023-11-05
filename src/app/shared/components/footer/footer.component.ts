import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { footerInterfaces } from '@core/models/footer';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  icons: footerInterfaces = { defaultOptions:[] };

  ngOnInit(): void {
    
  }
}
