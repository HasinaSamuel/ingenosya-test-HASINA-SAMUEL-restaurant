import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientModalDeleteComponent } from './ingredient-modal-delete.component';

describe('IngredientModalDeleteComponent', () => {
  let component: IngredientModalDeleteComponent;
  let fixture: ComponentFixture<IngredientModalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientModalDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
