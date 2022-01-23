import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusFormIngredientComponent } from './menus-form-ingredient.component';

describe('MenusFormIngredientComponent', () => {
  let component: MenusFormIngredientComponent;
  let fixture: ComponentFixture<MenusFormIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusFormIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusFormIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
