import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusDetailComponent } from './menus-detail.component';

describe('MenusDetailComponent', () => {
  let component: MenusDetailComponent;
  let fixture: ComponentFixture<MenusDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
