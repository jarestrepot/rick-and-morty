import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-mode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-mode.component.html',
  styleUrls: ['./theme-mode.component.scss']
})
export class ThemeModeComponent implements OnInit {

  public mode = signal<Boolean>(JSON.parse(window.localStorage.getItem('darkMode') ?? 'false'));
  @Input() siteRenderNavbar: boolean = true;
  @Output() modeTheme: EventEmitter<Boolean> = new EventEmitter();

  constructor(private renderer2: Renderer2, private element: ElementRef){
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.mode()));
    });
  }

  elementRef!: ElementRef;
  ngOnInit(): void {
    this.elementRef = this.element.nativeElement.ownerDocument.documentElement;
    this.refreshDarkMode();
  }

  refreshDarkMode() {
    this.mode() ? this.renderer2.addClass(this.elementRef, 'dark') : this.renderer2.removeClass(this.elementRef, 'dark');
    this.modeTheme.emit(this.mode());
  }

  addDarkMode() {
    !this.mode() ? this.renderer2.addClass(this.elementRef, 'dark') : this.renderer2.removeClass(this.elementRef, 'dark');
    this.mode.set(!this.mode());
    this.modeTheme.emit(this.mode());
  }


}
