import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleCharactersComponent } from './multiple-characters.component';

describe('MultipleCharactersComponent', () => {
  let component: MultipleCharactersComponent;
  let fixture: ComponentFixture<MultipleCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MultipleCharactersComponent]
    });
    fixture = TestBed.createComponent(MultipleCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
