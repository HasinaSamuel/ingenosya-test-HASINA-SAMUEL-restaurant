import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../interface/Ingredient';
import { RestaurantService } from '../services/restaurant.service';
import {MatDialog} from '@angular/material/dialog';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  restaurants:any;
  listIngredients: Ingredient[] = [];

  public actionIngredient: string = "";


  constructor( 
    private restaurantService:RestaurantService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {

    this.restaurantService.currentActionIngredient.subscribe((res) => (this.actionIngredient = res));

  }

  openNewIngredient() {
    const dialogRef = this.dialog.open(IngredientFormComponent);
    this.restaurantService.setActionIngredient("add");

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
