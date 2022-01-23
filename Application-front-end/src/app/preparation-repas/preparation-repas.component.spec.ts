import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationRepasComponent } from './preparation-repas.component';

describe('PreparationRepasComponent', () => {
  let component: PreparationRepasComponent;
  let fixture: ComponentFixture<PreparationRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparationRepasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
