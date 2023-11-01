import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCharacterPageComponent } from './details-character-page.component';

describe('DetailsCharacterPageComponent', () => {
  let component: DetailsCharacterPageComponent;
  let fixture: ComponentFixture<DetailsCharacterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailsCharacterPageComponent]
    });
    fixture = TestBed.createComponent(DetailsCharacterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
