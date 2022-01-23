import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Menus } from '../interface/Menus';
import { MenusService } from '../services/menus.service';
import { MenusFormComponent } from './menus-form/menus-form.component';
import { MenusFormIngredientComponent } from './menus-form-ingredient/menus-form-ingredient.component';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  restaurants:any;
  listMenus: Menus[] = [];

  public actionMenus: string = "";
  public actionView: string = "";
  public actionViewId: Menus = {};

  constructor(
    private menusService:MenusService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.menusService.currentActionMenus.subscribe((res) => (this.actionMenus = res));
    this.menusService.currentActionView.subscribe((res) => (this.actionView = res)); 
    this.menusService.currentActionViewId.subscribe((res) => (this.actionViewId = res));
  }

  openNewMenus() {
    const dialogRef = this.dialog.open(MenusFormComponent);
    this.menusService.setActionMenus("add");

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openNewIngredientNecessaire() {
    const dialogRef = this.dialog.open(MenusFormIngredientComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  backList() {
    this.menusService.setactionView("list");
  }
}
