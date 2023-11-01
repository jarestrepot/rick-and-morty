import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorComponent } from './main.component';

describe('MajorComponent', () => {
  let component: MajorComponent;
  let fixture: ComponentFixture<MajorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MajorComponent]
    });
    fixture = TestBed.createComponent(MajorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
