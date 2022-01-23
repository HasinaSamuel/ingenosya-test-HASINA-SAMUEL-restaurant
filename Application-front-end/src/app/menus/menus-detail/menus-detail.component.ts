import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IngredientNecessaireListe } from 'src/app/interface/IngredientNecessaireListe';
import { Menus } from 'src/app/interface/Menus';
import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-menus-detail',
  templateUrl: './menus-detail.component.html',
  styleUrls: ['./menus-detail.component.css']
})
export class MenusDetailComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  public dataSource: any = new MatTableDataSource<Menus>();
  public columnsToDisplay = ['id', 'nom','quantite'];
  public expandedElement: any;

  public itemEdit: any;

  public listIngredients: any;

  public listIngredient: IngredientNecessaireListe[] = [];

  public actionViewId: Menus = {};

  constructor(
    private menusService:MenusService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.menusService.currentActionViewId.subscribe((res) => (this.actionViewId = res));
    this.menusService.currentListMenus.subscribe((res) => {
      this.listIngredient = res; 
      this.dataSource = res;
      this.dataSource.paginator = this.paginator;
    });

    let IdMenu: Menus = {
      IdMenu: this.actionViewId.IdMenu
    };
      this.menusService.getIngredientNecessaireList(IdMenu).subscribe((response => {
      this.listIngredients = response;
      this.dataSource = this.listIngredients.ingredient_necessaire;
      this.dataSource.paginator = this.paginator;
      console.log(this.actionViewId.IdMenu);
    }));
  }
}
