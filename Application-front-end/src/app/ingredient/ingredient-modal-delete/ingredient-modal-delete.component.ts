import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ingredient } from 'src/app/interface/Ingredient';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-ingredient-modal-delete',
  templateUrl: './ingredient-modal-delete.component.html',
  styleUrls: ['./ingredient-modal-delete.component.css']
})
export class IngredientModalDeleteComponent implements OnInit {

  public deleteIngredient: Ingredient= {};

  constructor(private restaurantService:RestaurantService,private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.restaurantService.currentEditIngredient.subscribe((res: any) => { this.deleteIngredient = res;  });
  }



  public procValidDelete() {
    let deleteIngredient = { IdIngredient: this.deleteIngredient.IdIngredient };
    this.restaurantService.deleteIngredient(deleteIngredient).subscribe((res: any) => {
      console.log(res);
      this.get_list();
    } );
    this.dialogRef.closeAll();
  }

  public procCancelDelete() {
    
  }

  public get_list(){
    this.restaurantService.getIngredientList().subscribe((response => {
      this.restaurantService.setListIngredient(response.ingredient);
    }));
  }



}
