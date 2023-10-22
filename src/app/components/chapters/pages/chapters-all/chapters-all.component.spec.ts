import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersAllComponent } from './chapters-all.component';

describe('ChaptersAllComponent', () => {
  let component: ChaptersAllComponent;
  let fixture: ComponentFixture<ChaptersAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChaptersAllComponent]
    });
    fixture = TestBed.createComponent(ChaptersAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
