import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Ingredient } from 'src/app/interface/Ingredient';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { IngredientFormComponent } from '../ingredient-form/ingredient-form.component';
import { IngredientModalDeleteComponent } from '../ingredient-modal-delete/ingredient-modal-delete.component';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  public dataSource: any;
 
  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;
  
  @ViewChild(MatSort) sort?: MatSort;

  public actionIngredient: string = "";
  public editIngredient: Ingredient = {};
  public listIngredient: Ingredient[] = [];

   
  public columnsToDisplay = ['id', 'nom', 'quantite', 'unite', 'prix','action'];
  public expandedElement: any;

  public itemEdit: any;

  public listIngredients: any;

  


  constructor(
    private restaurantService:RestaurantService,
    public dialog: MatDialog
    ) { }

    
  ngOnInit(): void {

    
    this.restaurantService.currentActionIngredient.subscribe((res) => (this.actionIngredient = res));
    this.restaurantService.currentEditIngredient.subscribe((res) => (this.editIngredient = res));
    this.restaurantService.currentListIngredient.subscribe((res) => {
    this.listIngredient = res; 
    this.dataSource = new MatTableDataSource<Ingredient>(this.listIngredient);
    this.dataSource.paginator = this.paginator;
    
    });

    // Get list ingredient
    this.restaurantService.getIngredientList().subscribe((response => {
      this.listIngredients = response;
      this.dataSource = new MatTableDataSource<Ingredient>(this.listIngredients.ingredient);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource.paginator);
    }));

  }
  

  /** 
   * Function Open modal Edit Ingredient
   * 
   **/
  public openEditIngredient(param: any) {

    console.log("Edit ingredient ... ");
    this.restaurantService.setActionIngredient("edit");
    this.restaurantService.setEditIngredient(param);

    const dialogRef = this.dialog.open(IngredientFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }


  /** 
   * Function Open modal Delete Ingredient
   * 
   **/
   public openDeleteIngredient(param: any) {
    console.log("Delete ingredient ... ");
    this.restaurantService.setEditIngredient(param);
    const dialogRef = this.dialog.open(IngredientModalDeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
 
  }

}
