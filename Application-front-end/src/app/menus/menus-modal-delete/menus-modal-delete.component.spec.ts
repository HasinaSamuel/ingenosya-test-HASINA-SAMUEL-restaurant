import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusModalDeleteComponent } from './menus-modal-delete.component';

describe('MenusModalDeleteComponent', () => {
  let component: MenusModalDeleteComponent;
  let fixture: ComponentFixture<MenusModalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusModalDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
